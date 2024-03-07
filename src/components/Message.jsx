import PropTypes from "prop-types";
import Logo from "../assets/LogoImg.png";
import { Component, createRef } from "react";
import PerfectScrollbar from "perfect-scrollbar";
import "perfect-scrollbar/css/perfect-scrollbar.css";

class Avatar extends Component {
  render() {
    return (
      <div className="relative inline-block">
        <img
          src={this.props.image}
          alt="Avatar"
          className="rounded-full w-10 h-10"
        />
        {this.props.isOnline && (
          <span className="absolute bottom-0 right-0 block w-3 h-3 bg-green-500 border-2 border-white rounded-full"></span>
        )}
      </div>
    );
  }
}

Avatar.propTypes = {
  image: PropTypes.string.isRequired,
  isOnline: PropTypes.bool,
};

class ChatListItems extends Component {
  render() {
    const { onClick, active, animationDelay, image, isOnline, name, id } =
      this.props;

    return (
      <div
        onClick={() => onClick(id)}
        className={`flex items-center p-2 hover:bg-gray-200 cursor-pointer rounded-lg border ${
          active ? "bg-blue-100" : ""
        }`}
        style={{ animationDelay: `0.${animationDelay}s` }}
      >
        <Avatar image={image} isOnline={isOnline} />
        <div className="ml-2">
          <p className="text-sm font-medium">{name}</p>
          <span className="text-xs text-gray-500">Active recently</span>
        </div>
      </div>
    );
  }
}

ChatListItems.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
  active: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
  animationDelay: PropTypes.number.isRequired,
};

class Message extends Component {
  constructor(props) {
    super(props);
    this.messagesEndRef = createRef();
    this.chatContentRef = createRef();
    this.perfectScrollbar = null;
    this.state = {
      chat: [],
      chatUsers: [],
      activeChatId: null,
      msg: "",
    };
  }

  componentDidMount() {
    this.fetchChatUsers();
    this.fetchMessages();
    if (this.chatContentRef.current) {
      this.perfectScrollbar = new PerfectScrollbar(this.chatContentRef.current);
    }
  }

  componentWillUnmount() {
    if (this.perfectScrollbar) {
      this.perfectScrollbar.destroy();
    }
  }

  fetchChatUsers = async () => {
    const response = await fetch('/api/chat/users');
    const users = await response.json();
    this.setState({ chatUsers: users });
  };

  fetchMessages = async () => {
    const response = await fetch('/api/chat/messages');
    const messages = await response.json();
    this.setState({ chat: messages });
  };

  sendMessage = async () => {
    const { msg } = this.state;
    await fetch('/api/chat/send', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ msg }),
    });
    this.setState({ msg: "" });
    this.fetchMessages();
  };

  onStateChange = (e) => {
    this.setState({ msg: e.target.value });
  };

  selectChat = (selectedChatId) => {
    this.setState({ activeChatId: selectedChatId });
  };

  renderChatListItems = () => {
    return this.state.chatUsers.map((user, index) => (
      <ChatListItems
        key={user.id}
        id={user.id}
        name={user.name}
        image={user.image}
        isOnline={user.isOnline}
        active={this.state.activeChatId === user.id}
        onClick={this.selectChat}
        animationDelay={(index % 5) + 1}
      />
    ));
  };

  render() {
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
              {this.renderChatListItems()}
            </div>
            <div className="flex-1 flex flex-col md:ml-3">
              {/* Header */}
              <div className="p-3 bg-gray-100 border border-black shadow-md shadow-[#7d7d7d] flex justify-between items-center rounded-xl">
                <div className="flex items-center">
                  <Avatar
                    image="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTA78Na63ws7B7EAWYgTr9BxhX_Z8oLa1nvOA&usqp=CAU"
                    isOnline={true}
                  />
                  <p className="ml-2 font-semibold">Chat</p>
                </div>
              </div>
              {/* Chat content */}
              <div className="flex-1 overflow-hidden rounded-xl border border-black shadow-md shadow-[#7d7d7d] mt-3 mb-3">
                <div
                  className="p-3"
                  ref={this.chatContentRef}
                  style={{ height: "100%", position: "relative" }}
                >
                  {this.state.chat.map((item, index) => (
                    <div
                      key={index}
                      className={`flex ${item.type === "me" ? "justify-end" : "justify-start"} my-2`}
                    >
                      <Avatar image={item.image} isOnline={index % 2 === 0} />
                      <div className="bg-gray-200 rounded-lg p-2 mx-2">
                        <p>{item.msg}</p>
                      </div>
                    </div>
                  ))}
                  <div ref={this.messagesEndRef} />
                </div>
              </div>
              {/* Message input */}
              <div className="p-4 bg-gray-200 rounded-xl border border-black shadow-md shadow-[#7d7d7d]">
                <div className="flex items-center space-x-2">
                  <input
                    type="text"
                    placeholder="Type a message here..."
                    onChange={this.onStateChange}
                    value={this.state.msg}
                    className="flex-1 p-2 border border-black rounded-full"
                  />
                  <button
                    onClick={this.sendMessage}
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
  }
}

export default Message;
