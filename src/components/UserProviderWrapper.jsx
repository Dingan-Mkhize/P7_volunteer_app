import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import { UserProvider } from "./contexts/UserContext";

function UserProviderWrapper({ children }) {
  const navigate = useNavigate(); // This hook provides the navigation function

  return <UserProvider navigate={navigate}>{children}</UserProvider>;
}

UserProviderWrapper.propTypes = {
  children: PropTypes.node.isRequired,
};

export default UserProviderWrapper;
