import { Navigate } from "react-router-dom";

function Logout() {
  sessionStorage.removeItem("user");
  return <Navigate to={"/presentation"} />;
}

export default Logout;
