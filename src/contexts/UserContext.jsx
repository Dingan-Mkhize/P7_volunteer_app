import PropTypes from "prop-types";
import {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
} from "react";
import axios from "axios";

const UserContext = createContext();

export const useUser = () => useContext(UserContext);

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(localStorage.getItem("jwt") || null);

  // A simple check to see if the token looks like a JWT
  // This is very basic and should be adjusted to fit your token format
  const isValidToken = useCallback((token) => {
    if (!token) return false;
    // Example check: JWTs have three sections separated by dots
    const parts = token.split(".");
    return parts.length === 3;
  }, []);

  // Declare fetchCurrentUser using useCallback to memoize the function
  const fetchCurrentUser = useCallback(async () => {
    if (!token || !isValidToken(token)) return;

    try {
      const response = await axios.get("http://localhost:4000/current_user", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setUser(response.data);
    } catch (error) {
      console.error("Failed to fetch current user:", error);
      // Optionally handle token invalidation here
      setToken(null);
      setUser(null);
    }
  }, [token, isValidToken]);

  // Effect for syncing the token state with localStorage
  useEffect(() => {
    localStorage.setItem("jwt", token || "");
  }, [token]);

  // Effect for fetching current user data on mount and when token changes
  useEffect(() => {
    fetchCurrentUser();
  }, [fetchCurrentUser]);

  const login = (authorization, userData) => {
    const newToken = authorization.replace("Bearer ", "");
    if (isValidToken(newToken)) {
      setToken(newToken);
      setUser(userData);
    }
  };

  const logout = () => {
    setToken(null);
    setUser(null);
  };

  const contextValue = {
    user,
    token,
    login,
    logout,
  };

  return (
    <UserContext.Provider value={contextValue}>{children}</UserContext.Provider>
  );
};

UserProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
