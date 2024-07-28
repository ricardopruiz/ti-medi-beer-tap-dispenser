import ProtectedRoute from "./ProtectedRoute";
import { lazy } from "react";

export enum RoutePath {
  LOGIN = "/admin/login",
  ADMIN = "/admin",
  ADMIN_DISPENSERS = "/admin/dispenser",
}

const Login = lazy(() => import("../pages/Login"));
const Dispensers = lazy(() => import("../pages/Dispensers"));
const DispenserDetail = lazy(() => import("../pages/Dispenser"));

const routes = [
  {
    path: RoutePath.LOGIN,
    element: <Login />,
  },
  {
    path: RoutePath.ADMIN,
    element: (
      <ProtectedRoute>
        <Dispensers />
      </ProtectedRoute>
    ),
  },
  {
    path: `${RoutePath.ADMIN_DISPENSERS}/:id`,
    element: (
      <ProtectedRoute>
        <DispenserDetail />
      </ProtectedRoute>
    ),
  },
];

export default routes;
