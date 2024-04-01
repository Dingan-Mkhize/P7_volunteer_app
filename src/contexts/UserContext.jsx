import PropTypes from "prop-types";
import {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
  useMemo,
} from "react";
import axios from "axios";

const UserContext = createContext();

export const useUser = () => useContext(UserContext);

function parseJwt(token) {
  try {
    const base64Url = token.split(".")[1];
    const base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
    const jsonPayload = decodeURIComponent(
      atob(base64)
        .split("")
        .map(function (c) {
          return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2);
        })
        .join("")
    );

    return JSON.parse(jsonPayload);
  } catch (error) {
    return null;
  }
}

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(localStorage.getItem("jwt") || null);
  const [activeJobId, setActiveJobId] = useState(null);

  const logout = useCallback(() => {
    setToken(null);
    setUser(null);
    localStorage.removeItem("jwt");
  }, []);

  useEffect(() => {
    const interceptor = axios.interceptors.response.use(
      (response) => response,
      (error) => {
        if (error.response && error.response.status === 401) {
          logout();
        }
        return Promise.reject(error);
      }
    );

    return () => {
      axios.interceptors.response.eject(interceptor);
    };
  }, [logout]);

  const fetchCurrentUser = useCallback(async () => {
    if (!token) return;

    try {
      const response = await axios.get("http://localhost:4000/current_user", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setUser(response.data);
    } catch (error) {
      console.error("Failed to fetch current user:", error);
      logout();
    }
  }, [token, logout]);


  useEffect(() => {
    localStorage.setItem("jwt", token || "");
    if (token) {
      fetchCurrentUser();
    }
  }, [token, fetchCurrentUser]);


  const login = useCallback(
    (authorization, userData) => {
      const newToken = authorization.replace("Bearer ", "");
      setToken(newToken);
      const decodedToken = parseJwt(newToken);
      if (decodedToken) {
        setUser({ ...userData, id: decodedToken.sub });
        fetchCurrentUser(); // Call fetchCurrentUser directly
      }
    },
    [fetchCurrentUser]
  );

  useEffect(() => {
    const handleStorageChange = (event) => {
      if (event.key === "jwt" && !event.newValue) {
        logout();
      }
    };

    window.addEventListener("storage", handleStorageChange);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, [logout]);

  const contextValue = useMemo(
    () => ({
      user,
      token,
      login,
      logout,
      activeJobId,
      setActiveJobId,
    }),
    [user, token, login, logout, activeJobId]
  );

  return (
    <UserContext.Provider value={contextValue}>{children}</UserContext.Provider>
  );
};

UserProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
