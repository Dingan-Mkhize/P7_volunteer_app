import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { useAutocomplete } from "../hooks/useAutocomplete";
import AutoCompleteModal from "./AutoCompleteModal";

const EditRequestModal = ({
  isOpen,
  onClose,
  onSave,
  editFields,
  updateMapMarker,
}) => {
  // Autocomplete hook for location suggestions
  const { suggestions, setInput } = useAutocomplete();
  // Local state for modal input fields
  const [localEditFields, setLocalEditFields] = useState(editFields);
  // Modal state for showing the autocomplete suggestions
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Update local state when editFields prop changes
  useEffect(() => {
    if (isOpen) {
      setLocalEditFields(editFields);
    }
  }, [editFields, isOpen]);

  // Handlers for changes in the location input field
  const handleLocationChange = (e) => {
    const value = e.target.value;
    setLocalEditFields((prev) => ({ ...prev, location: value }));
    setInput(value); // Set input for autocomplete suggestions
    if (value.trim().length > 2) {
      setIsModalOpen(true); // Open the modal if the input length is more than 2
    } else {
      setIsModalOpen(false); // Close the modal otherwise
    }
  };

  // Handler for selecting a suggestion from the autocomplete modal
  const handleSelectSuggestion = (suggestion) => {
    setLocalEditFields((prev) => ({ ...prev, location: suggestion.name, lat: suggestion.lat, lng: suggestion.lon }));
    updateMapMarker(suggestion.lat, suggestion.lon);
    setIsModalOpen(false); // Close the modal after selecting a suggestion
  };

  // Handlers for other input field changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setLocalEditFields((prev) => ({ ...prev, [name]: value }));
  };

  // Save changes and call the onSave callback with updated fields
  const handleSave = () => {
    onSave(localEditFields);
    onClose(); // Close the modal after saving
  };

  // Do not render the modal if it's not open
  if (!isOpen) return null;

  return (
    <div className="fixed z-[999] inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full">
      <div className="relative top-1/4 mx-auto p-5 border w-11/12 md:w-1/2 lg:w-1/3 shadow-lg rounded-3xl bg-white">
        <div className="mt-3 text-center">
          <h2 className="text-lg leading-6 font-medium text-gray-900">
            Edit Request
          </h2>
          <div className="mt-2 px-7 py-3">
            {/* Title input */}
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Title:
            </label>
            <input
              type="text"
              name="title"
              value={localEditFields.title}
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
            {/* Description input */}
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Description:
            </label>
            <textarea
              name="description"
              value={localEditFields.description}
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            />
            {/* Location input */}
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Location:
            </label>
            <input
              type="text"
              name="location"
              value={localEditFields.location}
              onChange={handleLocationChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
            {/* Autocomplete suggestions modal */}
            <AutoCompleteModal
              isOpen={isModalOpen}
              suggestions={suggestions}
              onSelectSuggestion={handleSelectSuggestion}
              onClose={() => setIsModalOpen(false)}
            />
          </div>

          <div className="items-center px-4 py-3">
            <button
              onClick={handleSave}
              className="px-4 py-2 mr-3 border shadow-md rounded-full hover:translate-y-[-2px] hover:shadow-lg transition duration-300"
            >
              Save
            </button>
            <button
              onClick={onClose}
              className="mt-3 px-4 py-2 bg-black text-white border shadow-md rounded-full hover:translate-y-[-2px] hover:shadow-lg transition duration-300"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

EditRequestModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  onSave: PropTypes.func.isRequired,
  updateMapMarker: PropTypes.func.isRequired,
  editFields: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
  }).isRequired,
  setEditFields: PropTypes.func.isRequired,
};

export default EditRequestModal;
