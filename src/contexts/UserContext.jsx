import PropTypes from "prop-types";
import { volunteers } from "../Data";
import { createContext, useContext, useState } from "react";

const UserContext = createContext();

export const useUser = () => useContext(UserContext);

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const mockLogin = (userId) => {
    const userDetails = volunteers.find((user) => user.id === userId);
    if (userDetails) {
      setUser(userDetails);
    }
  };

  const mockLogout = () => {
    setUser(null);
  };

  return (
    <UserContext.Provider value={{ user, mockLogin, mockLogout }}>
      {children}
    </UserContext.Provider>
  );
};

UserProvider.propTypes = {
  children: PropTypes.node.isRequired,
};