import { useState } from "react";
import PropTypes from "prop-types";

const MessageVolunteersModal = ({ isOpen, onClose }) => {
  const [message, setMessage] = useState("");

  if (!isOpen) return null;

  const handleSubmit = () => {
    alert("Message sent successfully!");
    setMessage("");
    onClose(); // Close the modal
  };

  return (
    <div className="my-modal fixed z-[999] inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full">
      <div className="relative top-1/4 mx-auto p-5 w-96 shadow-lg rounded-3xl bg-white border border-black">
        <h3 className="text-lg font-medium leading-6 text-gray-900">
          Message Volunteers
        </h3>
        <textarea
          className="mt-2 p-2 w-full h-40 border rounded-md"
          placeholder="Type your message here..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <div className="mt-4 flex justify-center">
          <button
            className="px-4 py-2 mr-3 text-black border border-black shadow-md shadow-[#7d7d7d] hover:translate-y-[-2px] hover:shadow-lg transition duration-300 rounded-full"
            onClick={handleSubmit}
          >
            Send
          </button>
          <button
            className="px-4 py-2 text-white text-base bg-black border border-black shadow-md shadow-[#7d7d7d] hover:translate-y-[-2px] hover:shadow-lg transition duration-300 rounded-full"
            onClick={onClose}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

MessageVolunteersModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default MessageVolunteersModal;
