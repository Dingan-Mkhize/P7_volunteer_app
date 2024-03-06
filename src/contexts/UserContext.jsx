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

  // Declare fetchCurrentUser using useCallback to memoize the function
  const fetchCurrentUser = useCallback(async () => {
    if (!token) return;

    try {
      const response = await axios.get("http://localhost:4000/current_user", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setUser(response.data); // Adjust according to your response structure
    } catch (error) {
      console.error("Failed to fetch current user:", error);
      setToken(null); // Invalidate the token if there is an error
      setUser(null); // Reset the user state
    }
  }, [token]); // token is a dependency here

  // Effect for syncing the token state with localStorage
  useEffect(() => {
    if (token) {
      localStorage.setItem("jwt", token);
    } else {
      localStorage.removeItem("jwt");
    }
  }, [token]);

  // Effect for fetching current user data on mount and when token changes
  useEffect(() => {
    fetchCurrentUser();
  }, [fetchCurrentUser]);

  const login = (authorization, userData) => {
    // Assume the full "Bearer <token>" string is passed in as 'authorization'
    setToken(authorization.replace("Bearer ", ""));
    setUser(userData);
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
