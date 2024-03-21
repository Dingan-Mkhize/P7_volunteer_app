import PropTypes from "prop-types";
import Logo from "../assets/LogoImg.png";
import { useEffect, useRef, useState } from "react";
import PerfectScrollbar from "perfect-scrollbar";
import "perfect-scrollbar/css/perfect-scrollbar.css";
import { useQuery, useMutation, useQueryClient } from "react-query";
import { useUser } from "../contexts/UserContext";
import axios from "axios";
import { useParams } from "react-router-dom";

const RequestListItem = ({ onClick, active, animationDelay, title, id }) => {
  return (
    <div
      onClick={() => onClick(id)}
      className={`flex items-center p-2 hover:bg-gray-200 cursor-pointer rounded-lg border ${
        active ? "bg-blue-100" : ""
      }`}
      style={{ animationDelay: `0.${animationDelay}s` }}
    >
      <div className="ml-2">
        <p className="text-sm font-medium">{title}</p>
        <span className="text-xs text-gray-500">Last message</span>
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
};

const Message = () => {
  const { user, token } = useUser();
  const queryClient = useQueryClient();
  const chatContentRef = useRef(null);
  const messagesEndRef = useRef(null);
  const [activeRequestId, setActiveRequestId] = useState(null);
  const [newMessage, setNewMessage] = useState("");
  const { jobId } = useParams();

  useEffect(() => {
    if (jobId) {
      setActiveRequestId(jobId);
    }
  }, [jobId]);

  const { data: requests, isLoading: isLoadingRequests } = useQuery(
    "requests",
    () => fetchRequests(),
    { enabled: !!token } // Ensure token is available before making the request
  );

  const { data: messages, isLoading: isLoadingMessages } = useQuery(
    ["messages", activeRequestId],
    () => fetchMessages(activeRequestId),
    { enabled: !!activeRequestId && !!token } // Ensure both activeRequestId and token are available
  );

  const sendMessageMutation = useMutation(
    ({ requestId, content }) => sendMessage({ requestId, content }),
    {
      onSuccess: () => {
        queryClient.invalidateQueries(["messages", activeRequestId]);
        setNewMessage("");
      },
    }
  );

  useEffect(() => {
    if (chatContentRef.current) {
      new PerfectScrollbar(chatContentRef.current);
    }
  }, []);

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  async function fetchRequests() {
    const response = await axios.get("http://localhost:4000/requests", {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.data;
  }

  async function fetchMessages(requestId) {
    const response = await axios.get(
      `http://localhost:4000/requests/${requestId}/messages`,
      { headers: { Authorization: `Bearer ${token}` } }
    );
    return response.data;
  }

  async function sendMessage({ requestId, content }) {
    await axios.post(
      `http://localhost:4000/requests/${requestId}/messages`,
      { content },
      { headers: { Authorization: `Bearer ${token}` } }
    );
  }

  const handleSendMessage = () => {
    if (newMessage.trim() !== "") {
      sendMessageMutation.mutate({
        requestId: activeRequestId,
        content: newMessage,
      });
    }
  };

  const selectRequest = (selectedRequestId) => {
    setActiveRequestId(selectedRequestId);
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
        <div className="pb-3 flex flex-col lg:flex-row flex-1 overflow-hidden">
          {/* Sidebar - Adjusted for mobile */}
          <div className="lg:w-1/4 w-full bg-gray-100 p-4 overflow-y-auto border border-black shadow-md shadow-[#7d7d7d] rounded-xl mt-3 mb-3 lg:mb-0 lg:mt-0 lg:mr-3">
            {requests.map((request, index) => (
              <RequestListItem
                key={request.id}
                id={request.id}
                title={request.title}
                active={activeRequestId === request.id}
                onClick={selectRequest}
                animationDelay={(index % 5) + 1}
              />
            ))}
          </div>
          <div className="flex-1 flex flex-col md:ml-3">
            {/* Header */}
            <div className="p-3 bg-gray-100 border border-black shadow-md shadow-[#7d7d7d] flex justify-between items-center rounded-xl">
              <div className="flex items-center">
                <p className="ml-2 font-semibold">Messages</p>
              </div>
            </div>
            {/* Chat content */}
            <div className="flex-1 overflow-hidden rounded-xl border border-black shadow-md shadow-[#7d7d7d] mt-3 mb-3">
              <div
                className="p-3"
                ref={chatContentRef}
                style={{ height: "100%", position: "relative" }}
              >
                {messages &&
                  messages.map((message, index) => (
                    <div
                      key={message.id}
                      className={`flex ${
                        message.sender.id === user.id
                          ? "justify-end"
                          : "justify-start"
                      } my-2`}
                    >
                      <Avatar image={message.sender.profilePic} />
                      <div className="bg-gray-200 rounded-lg p-2 mx-2">
                        <p>{message.content}</p>
                      </div>
                    </div>
                  ))}

                <div ref={messagesEndRef} />
              </div>
            </div>
            {/* Message input */}
            <div className="p-4 bg-gray-200 rounded-xl border border-black shadow-md shadow-[#7d7d7d]">
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
