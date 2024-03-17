import { useState, useEffect } from "react";
//import { useQuery } from "react-query";
import axios from "axios";
import { debounce } from "lodash";

const fetchSuggestions = (input, lat = 51.5074, lon = -0.1278) => {
  const apiUrl = `https://photon.komoot.io/api/?q=${encodeURIComponent(input)}&lat=${lat}&lon=${lon}&limit=5`;
  return axios.get(apiUrl).then((response) =>
    response.data.features.map((feature) => ({
      name: feature.properties.name,
      city: feature.properties.city || feature.properties.name,
      state: feature.properties.state,
      country: feature.properties.country,
      lat: feature.geometry.coordinates[1],
      lon: feature.geometry.coordinates[0],
    }))
  );
};

export const useAutocomplete = () => {
  const [input, setInput] = useState("");
  const [localSuggestions, setLocalSuggestions] = useState([]);

  // Declarative function to refetch suggestions
  const fetchAndSetSuggestions = (query) => {
    fetchSuggestions(query).then((fetchedSuggestions) => {
      setLocalSuggestions(fetchedSuggestions);
    });
  };

  // Debounced fetch suggestions function
  const debouncedFetchSuggestions = debounce(fetchAndSetSuggestions, 300);

  useEffect(() => {
    if (input.length > 2) {
      debouncedFetchSuggestions(input);
    } else {
      setLocalSuggestions([]);
    }
    // Cleanup debounced function on unmount
    return () => {
      debouncedFetchSuggestions.cancel();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [input]);

  const onInputChange = (value) => {
    setInput(value);
  };

  return {
    input,
    suggestions: localSuggestions,
    setInput: onInputChange,
  };
};
