import PropTypes from "prop-types";
import { Component, createRef } from "react";
import { chatItms, chatUsers } from "../Data"; // Adjust path as necessary

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
    this.state = {
      chat: chatItms,
      chatUsers: chatUsers,
      activeChatId: null,
      msg: "",
    };
  }

  // scrollToBottom = () => {
  //   this.messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  // };

  // componentDidMount() {
  //   window.addEventListener("keydown", this.handleKeyDown);
  //   this.scrollToBottom();
  // }

  // componentWillUnmount() {
  //   window.removeEventListener("keydown", this.handleKeyDown);
  // }

  // handleKeyDown = (e) => {
  //   if (e.keyCode === 13 && this.state.msg.trim() !== "") {
  //     this.sendMessage();
  //     e.preventDefault(); // Prevent default to avoid submitting forms in case this component is used within a form
  //   }
  // };

  sendMessage = () => {
    const newMessage = {
      key: Date.now(),
      type: "me",
      msg: this.state.msg,
      image:
        "https://pbs.twimg.com/profile_images/1116431270697766912/-NfnQHvh_400x400.jpg",
    };
    this.setState(
      { chat: [...this.state.chat, newMessage], msg: "" },
      this.scrollToBottom
    );
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
        animationDelay={(index % 5) + 1} // Example to stagger the animation, adjust as needed
      />
    ));
  };

  render() {
    return (
      <div className="w-full mx-auto lg:max-w-4xl">
        <div className="flex flex-col lg:flex-row h-full">
          {/* Sidebar - Adjusted for mobile */}
          <div className="lg:w-1/4 w-full bg-gray-100 p-4 overflow-y-auto border border-black rounded-xl mt-3 mb-3 lg:mb-3 lg:mt-3 lg:mr-3">
            {this.renderChatListItems()}
          </div>
          <div className="flex-1 flex flex-col ml-3 mt-3">
            {/* Header */}
            <div className="p-4 bg-gray-100 border border-black flex justify-between items-center rounded-xl">
              <div className="flex items-center">
                <Avatar
                  image="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTA78Na63ws7B7EAWYgTr9BxhX_Z8oLa1nvOA&usqp=CAU"
                  isOnline={true}
                />
                <p className="ml-2 font-semibold">Chat</p>
              </div>
            </div>
            {/* Chat content */}
            <div className="flex-1 overflow-y-auto p-4 mt-3 mb-3 border border-black rounded-xl">
              {this.state.chat.map((item, index) => (
                <div
                  key={index}
                  className={`flex ${
                    item.type === "me" ? "justify-end" : "justify-start"
                  } my-2`}
                >
                  <Avatar image={item.image} isOnline={index % 2 === 0} />
                  <div className="bg-gray-200 rounded-lg p-2 mx-2 ">
                    <p>{item.msg}</p>
                  </div>
                </div>
              ))}
              <div ref={this.messagesEndRef} />
            </div>
            {/* Message input */}
            <div className="p-4 bg-gray-200 mb-3 rounded-xl border border-black">
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
    );
  }
}

export default Message;
