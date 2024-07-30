import Dispenser from "../pages/Dispenser";
import ProtectedRoute from "./ProtectedRoute";
import { lazy, Suspense } from "react";

export enum RoutePath {
  LOGIN = "/admin/login",
  ADMIN = "/admin",
  ADMIN_DISPENSERS = "/admin/dispenser",
  DISPENSER_LIST = "/",
  DISPENSER = "/dispenser",
}

const Login = lazy(() => import("../pages/Login"));
const Dispensers = lazy(() => import("../pages/Dispensers"));
const DispenserDetail = lazy(() => import("../pages/DispenserDetail"));

const routes = [
  {
    path: RoutePath.LOGIN,
    element: <Login />,
  },
  {
    path: RoutePath.ADMIN,
    element: (
      <ProtectedRoute>
        <Suspense>
          <Dispensers />
        </Suspense>
      </ProtectedRoute>
    ),
  },
  {
    path: `${RoutePath.ADMIN_DISPENSERS}/:id`,
    element: (
      <ProtectedRoute>
        <Suspense>
          <DispenserDetail />
        </Suspense>
      </ProtectedRoute>
    ),
  },
  {
    path: `${RoutePath.DISPENSER}/:id`,
    element: <Dispenser />,
  },
];

export default routes;
