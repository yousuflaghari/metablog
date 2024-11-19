import { Outlet } from "react-router-dom";
import { Navigate } from "react-router-dom";

function ProtectedLayout() {
  const user = true;

  return user ? <Outlet /> : <Navigate to="/login" />;
}

export default ProtectedLayout;
