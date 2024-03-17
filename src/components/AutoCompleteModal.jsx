import PropTypes from "prop-types";

const AutoCompleteModal = ({
  isOpen,
  suggestions,
  onSelectSuggestion,
  onClose,
  onSearchChange, // Add this prop for handling search input changes
  searchValue, // Add this prop to maintain the search input state
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed my-modal inset-0 z-[999] bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full">
      {/* Overlay */}
      <div className="relative top-1/4 mx-auto p-5 border w-11/12 md:w-1/2 lg:w-1/3 shadow-lg bg-white rounded-3xl">
        {/* Modal */}
        <div className="mt-3 text-center">
          <h2 className="text-lg leading-6 font-medium text-gray-900">
            Select Location
          </h2>
          <input
            type="text"
            value={searchValue}
            onChange={onSearchChange}
            placeholder="Type to search..."
            className="w-full p-2 border border-gray-300 rounded mb-2"
          />
          <div
            className="mt-2 px-7 py-3 overflow-y-auto"
            style={{ maxHeight: "50vh" }}
          >
            <ul>
              {suggestions.map((suggestion, index) => (
                <li
                  key={index}
                  onClick={() => onSelectSuggestion(suggestion)}
                  className="cursor-pointer py-2 px-4 hover:bg-gray-100"
                >
                  {suggestion.name}
                </li>
              ))}
            </ul>
          </div>
          <div className="items-center px-4 py-3">
            <button
              onClick={onClose}
              className="px-4 py-2 text-white bg-black border border-black shadow-md shadow-[#7d7d7d] hover:translate-y-[-2px] hover:shadow-lg transition duration-300 rounded-full"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

AutoCompleteModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  suggestions: PropTypes.array.isRequired,
  onSelectSuggestion: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired,
  onSearchChange: PropTypes.func.isRequired, // Add this to the propTypes
  searchValue: PropTypes.string.isRequired, // And this one as well
};

export default AutoCompleteModal;
