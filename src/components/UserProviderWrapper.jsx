import { useNavigate } from "react-router-dom";
import { UserProvider } from "./contexts/UserContext";

function UserProviderWrapper({ children }) {
  const navigate = useNavigate(); // This hook provides the navigation function

  return <UserProvider navigate={navigate}>{children}</UserProvider>;
}

export default UserProviderWrapper;
