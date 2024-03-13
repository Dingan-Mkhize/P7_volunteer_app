import { useState, useEffect } from "react";
import { useQuery } from "react-query";
import axios from "axios";
import { debounce } from "lodash";

// The fetchSuggestions function remains the same, but it's no longer async
// since React Query handles the promise.
const fetchSuggestions = (input) => {
  const apiUrl = `https://photon.komoot.io/api/?q=${encodeURIComponent(input)}&lat=51.5074&lon=-0.1278&limit=5`;
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

  const debouncedFetchSuggestions = debounce((query) => {
    if (query.length > 2) {
      refetch();
    }
  }, 300); // Adjust debounce timing as needed

  useEffect(() => {
    debouncedFetchSuggestions(input);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [input]);

  // Use React Query to fetch suggestions
  const { data: suggestions, refetch } = useQuery(
    ["fetchSuggestions", input],
    () => fetchSuggestions(input),
    {
      enabled: false, // Disable automatic queries on mount and input change
      keepPreviousData: true, // Keep displaying the old suggestions until new ones are fetched
    }
  );

  // A function to handle input changes and trigger the refetch manually
  const onInputChange = (value) => {
    setInput(value);
    if (value.length > 2) {
      refetch();
    }
  };

  return {
    input,
    suggestions: suggestions || [],
    setInput: onInputChange,
  };
};
