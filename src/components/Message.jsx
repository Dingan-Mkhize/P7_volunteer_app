import PropTypes from "prop-types";
import Logo from "../assets/LogoImg.png";
import { useRef, useState, useEffect } from "react";
import "perfect-scrollbar/css/perfect-scrollbar.css";
import { useQuery, useMutation, useQueryClient } from "react-query";
import { useUser } from "../contexts/UserContext"; 
import axios from "axios";
import FallbackProfilePic from "./FallbackProfilePic";

const RequestListItem = ({
  onClick,
  active,
  animationDelay,
  title,
  id,
  requesterFirstName,
  requesterLastName,
}) => {
  const requesterFullName = `${requesterFirstName} ${requesterLastName}`;

  return (
    <div
      onClick={() => onClick(id)}
      className={`flex items-center mb-3 py-1 hover:bg-gray-200 cursor-pointer rounded-lg border border-black shadow-md shadow-[#7d7d7d] ${
        active ? "bg-grey-100" : ""
      }`}
      style={{ animationDelay: `0.${animationDelay}s` }}
    >
      <FallbackProfilePic
        name={requesterFullName}
        size={5}
        color="blue"
        padding="p-6"
      />
      <div className="ml-3 flex-1">
        <p className="text-sm font-medium">{title}</p>
        <span className="text-xs text-gray-500">
          Requested by: {requesterFullName}
        </span>
      </div>
    </div>
  );
};



RequestListItem.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  active: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
  animationDelay: PropTypes.number.isRequired,
  showCompletionButton: PropTypes.bool,
  completeJob: PropTypes.func,
  requesterFirstName: PropTypes.string.isRequired,
  requesterLastName: PropTypes.string.isRequired,
};

// Set default props
RequestListItem.defaultProps = {
  showCompletionButton: false,
  completeJob: null,
};

const Message = () => {
  const { user, token, activeJobId } = useUser();
  const queryClient = useQueryClient();
  const [requestsList, setRequestsList] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const [activeRequestId, setActiveRequestId] = useState(null);
  const [receiverId, setReceiverId] = useState(null);
  const chatContentRef = useRef(null);
  const [animationClass, setAnimationClass] = useState("fadeIn");
  const [currentPage, setCurrentPage] = useState(0);
  const requestsPerPage = 5;

  // Fetch requests from the server
  const { data: requests, isLoading: isLoadingRequests } = useQuery(
    "requests",
    async () => {
      const response = await axios.get(`http://localhost:4000/requests`, {
        headers: { Authorization: `Bearer ${token}` },
        params: {
          includeTimedOut: false,
        },
      });
      console.log("Requests data:", response.data);
      return response.data;
    },
    { enabled: !!token }
  );

  // Fetch messages and determine receiverId based on the latest message
  const { data: messages, isLoading: isLoadingMessages } = useQuery(
    ["messages", activeRequestId],
    async () => {
      if (activeRequestId) {
        const response = await axios.get(
          `http://localhost:4000/requests/${activeRequestId}/messages`,
          { headers: { Authorization: `Bearer ${token}` } }
        );
        const fetchedMessages = response.data;
        if (fetchedMessages.length > 0) {
          // Determine receiverId based on the role in the last message
          const lastMessage = fetchedMessages[fetchedMessages.length - 1];
          setReceiverId(
            lastMessage.sender_id === user.id
              ? lastMessage.receiver_id
              : lastMessage.sender_id
          );
        }
        return fetchedMessages
          .map((message) => ({
            ...message,
            isSender: message.sender_id === user.id,
            createdAtFormatted: new Date(message.created_at).toLocaleString(),
          }))
          .sort((a, b) => new Date(a.created_at) - new Date(b.created_at));
      }
      return [];
    },
    { enabled: !!activeRequestId && !!token }
  );

  useEffect(() => {
    if (requests) {
      setRequestsList(requests);
    }
  }, [requests]);

  // Send a new message mutation
  const sendMessageMutation = useMutation(
    async (messageData) => {
      await axios.post(
        `http://localhost:4000/requests/${activeRequestId}/messages`,
        {
          content: messageData.content,
          receiver_id: receiverId, // use dynamically determined receiverId
        },
        { headers: { Authorization: `Bearer ${token}` } }
      );
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries(["messages", activeRequestId]);
        setNewMessage("");
      },
    }
  );

  const totalPages = requestsList
    ? Math.ceil(requestsList.length / requestsPerPage)
    : 0;
  const displayedRequests = requestsList
    ? requestsList
        .slice(
          currentPage * requestsPerPage,
          (currentPage + 1) * requestsPerPage
        )
        .map((request) => ({
          ...request,
          showCompletionButton: request.id === activeJobId,
          userName: request.userName || "",
        }))
    : [];

  // Functions to change the page
  const changePage = (direction) => {
    setAnimationClass("fadeOut");
    setTimeout(() => {
      setCurrentPage((prev) =>
        direction === "next"
          ? (prev + 1) % totalPages
          : (prev ? prev : totalPages) - 1
      );
      setAnimationClass("fadeIn");
    }, 500);
  };

  const handleSendMessage = () => {
    if (newMessage.trim() !== "" && receiverId) {
      sendMessageMutation.mutate({ content: newMessage });
    }
  };

  if (isLoadingRequests || isLoadingMessages) {
    return <div>Loading...</div>;
  }

  return (
    <div className="bg-white flex flex-col mt-3 px-16 py-12 max-md:px-5 lg:flex-row border shadow-3xl rounded-md">
      <div className="w-full mx-auto lg:max-w-4xl flex flex-col">
        {/* Logo Section */}
        <div className="text-center text-black bg-white mb-6 pt-6 border border-black shadow-lg shadow-[#7d7d7d] rounded-2xl">
          <img
            loading="lazy"
            src={Logo}
            alt="Hands United Logo"
            className="mx-auto object-contain object-center w-[130px] h-[130px] overflow-hidden border border-black rounded-full shadow-lg shadow-[#7d7d7d]"
          />
          <div className="mt-6 text-6xl font-bold leading-[67.2px] max-md:mt-10 max-md:text-4xl">
            Hands United
          </div>
          <div className="mt-3 mb-6 text-lg leading-7">
            A helping hand, to unite community.
          </div>
        </div>
        <div className="flex flex-col lg:flex-row flex-1 py-3 overflow-hidden">
          {/* Sidebar - Adjusted for mobile */}
          <div className="lg:w-1/4 w-full flex flex-col justify-between bg-gray-100 p-4 border border-black shadow-md shadow-[#7d7d7d] rounded-xl mt-3 mb-3 lg:mb-0 lg:mt-0 lg:mr-3">
            {/* Wrap the request list in a div that will receive the animation class */}
            <div className={`overflow-y-auto ${animationClass}`}>
              {displayedRequests.map((request, index) => (
                <RequestListItem
                  key={request.id}
                  id={request.id}
                  title={request.title}
                  active={activeRequestId === request.id}
                  onClick={() => setActiveRequestId(request.id)}
                  animationDelay={index}
                  requesterFirstName={request.user?.first_name || ""}
                  requesterLastName={request.user?.last_name || ""}
                />
              ))}
            </div>

            {/* Pagination buttons */}
            <div className="flex justify-between p-3">
              <button
                onClick={() => changePage("next")}
                className="text-sm bg-black text-white px-3 py-2 hover:bg-gray-600 shadow-md shadow-[#7d7d7d] hover:translate-y-[-2px] hover:shadow-lg transition duration-300 rounded-full"
              >
                &#9650;
              </button>
              <button
                onClick={() => changePage("prev")}
                className="text-sm bg-black text-white px-3 py-2 hover:bg-gray-600 shadow-md shadow-[#7d7d7d] hover:translate-y-[-2px] hover:shadow-lg transition duration-300 rounded-full"
              >
                &#9660;
              </button>
            </div>
          </div>

          <div className="flex-1 flex flex-col">
            {/* Header */}
            <div className="p-3 bg-gray-100 border border-black shadow-md shadow-[#7d7d7d] flex justify-between items-center rounded-xl">
              <div className="flex items-center">
                <p className="ml-2 font-semibold">Messages</p>
              </div>
            </div>
            {/* Chat content */}
            <div className="flex-1 overflow-hidden rounded-xl border border-black shadow-md shadow-[#7d7d7d] mt-3 mb-3">
              <div
                className="flex-1 overflow-auto"
                style={{ maxHeight: "calc(100vh - 250px)" }}
              >
                <div ref={chatContentRef} className="p-3">
                  {messages &&
                    messages.map((message, index) => (
                      <div
                        key={index}
                        className={`flex ${message.isSender ? "justify-end" : "justify-start"}`}
                      >
                        {/* Display the message content */}
                        <div
                          className={`max-w-xs md:max-w-md lg:max-w-lg break-words ${message.isSender ? "bg-blue-100" : "bg-gray-100"} m-3 p-3 border border-black shadow-lg shadow-[#7d7d7d] rounded-xl`}
                        >
                          {message.content}
                          <div className="text-xs text-gray-500 mt-1">
                            {message.sender.full_name} - {message.createdAtFormatted}
                          </div>
                        </div>
                      </div>
                    ))}
                </div>
              </div>
            </div>

            {/* Message input */}
            <div className="p-4 bg-gray-100 rounded-xl border border-black shadow-md shadow-[#7d7d7d]">
              <div className="flex items-center space-x-2">
                <input
                  type="text"
                  placeholder="Type a message here..."
                  value={newMessage}
                  onChange={(e) => setNewMessage(e.target.value)}
                  className="flex-1 p-2 border border-black rounded-full"
                />
                <button
                  onClick={handleSendMessage}
                  className="text-white text-base leading-6 whitespace-nowrap justify-center items-stretch border bg-black px-3 py-2 border-solid border-black shadow-md shadow-[#7d7d7d] hover:translate-y-[-2px] hover:shadow-lg transition duration-300 max-md:px-5 rounded-full"
                >
                  Send
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Message;