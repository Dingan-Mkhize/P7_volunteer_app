import { useState, useEffect } from "react";
import { useQuery } from "react-query";
import axios from "axios";
import { debounce } from "lodash";

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
  const [localSuggestions, setLocalSuggestions] = useState([]);

  const debouncedFetchSuggestions = debounce((query) => {
    if (query.length > 2) {
      refetch();
    }
  }, 300);

  useEffect(() => {
    debouncedFetchSuggestions(input);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [input]);

  const { refetch } = useQuery(
    ["fetchSuggestions", input],
    () =>
      fetchSuggestions(input).then((fetchedSuggestions) => {
        setLocalSuggestions(fetchedSuggestions);
        return fetchedSuggestions;
      }),
    {
      enabled: false, 
      keepPreviousData: true,
    }
  );

  const onInputChange = (value) => {
    setInput(value);
    if (value === "") {
      setLocalSuggestions([]);
    } else if (value.length > 2) {
      refetch();
    }
  };

  return {
    input,
    suggestions: localSuggestions,
    setInput: onInputChange,
  };
};
