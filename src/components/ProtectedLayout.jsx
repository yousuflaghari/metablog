import { Outlet, Navigate } from "react-router-dom";
import { getFromLocalStorage } from "../utils";

function ProtectedLayout() {
  const user = getFromLocalStorage("user");

  return user ? <Outlet /> : <Navigate to="/login" />;
}

export default ProtectedLayout;
