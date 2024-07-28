import { Navigate, useLocation } from "react-router-dom";
import { getLoggedUser } from "../services/login";
import { RoutePath } from "./routes";

type Props = {
  redirectPath?: string;
  children: React.ReactNode;
};

const ProtectedRoute = ({
  redirectPath = RoutePath.LOGIN,
  children,
}: Props) => {
  const location = useLocation();
  const currentUser = getLoggedUser();

  if (!currentUser) {
    return (
      <Navigate to={redirectPath} state={{ redirectTo: location }} replace />
    );
  }

  return children;
};

export default ProtectedRoute;
