import { useState, useEffect, useRef } from "react";
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
  const { suggestions, setInput } = useAutocomplete();
  const [localEditFields, setLocalEditFields] = useState(editFields);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const inputRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      setLocalEditFields(editFields);
      setSearchValue(editFields.location);
      inputRef.current?.focus();
    }
  }, [editFields, isOpen]);

  const handleLocationChange = (e) => {
    const value = e.target.value;
    setLocalEditFields((prev) => ({ ...prev, location: value }));
    setSearchValue(value);
    setInput(value);
    if (value.trim().length > 2) {
      setIsModalOpen(true);
    } else {
      setIsModalOpen(false);
    }
  };

  const handleSelectSuggestion = (suggestion) => {
    setLocalEditFields((prev) => ({
      ...prev,
      location: suggestion.name,
      lat: suggestion.lat,
      lng: suggestion.lon,
    }));
    setSearchValue(suggestion.name);
    updateMapMarker(suggestion.lat, suggestion.lon);
    setIsModalOpen(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLocalEditFields((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = () => {
    onSave(localEditFields);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed z-[999] inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full">
      <div className="relative top-1/4 mx-auto p-5 border w-11/12 md:w-1/2 lg:w-1/3 shadow-lg rounded-3xl bg-white">
        <div className="mt-3 text-center">
          <h2 className="text-lg leading-6 font-medium text-gray-900">
            Edit Request
          </h2>
          <div className="mt-2 px-7 py-3">
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
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Description:
            </label>
            <textarea
              name="description"
              value={localEditFields.description}
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            />
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Location:
            </label>
            <input
              type="text"
              name="location"
              value={searchValue}
              onChange={handleLocationChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
            <AutoCompleteModal
              isOpen={isModalOpen}
              searchValue={searchValue}
              onSearchChange={(e) => {
                setSearchValue(e.target.value);
                setInput(e.target.value);
              }}
              inputRef={inputRef}
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
    lat: PropTypes.number,
    lng: PropTypes.number,
  }).isRequired,
};

export default EditRequestModal;
