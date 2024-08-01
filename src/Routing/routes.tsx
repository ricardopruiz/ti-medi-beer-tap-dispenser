import LoadingSpinner from "../components/LoadingSpinner";
import ProtectedRoute from "./ProtectedRoute";
import { lazy, Suspense } from "react";

export enum RoutePath {
  LOGIN = "/admin/login",
  ADMIN = "/admin",
  ADMIN_DISPENSERS = "/admin/dispenser",
  DISPENSER_LIST = "/",
  DISPENSER = "/dispenser",
}

/**
 * To split the compiled javascript into smaller pieces
 * and provide a faster initial loading we will lazy load the
 * different pages of our application.
 */
const Login = lazy(() => import("../pages/Login"));
const Dispensers = lazy(() => import("../pages/Dispensers"));
const DispenserDetail = lazy(() => import("../pages/DispenserDetail"));
const Dispenser = lazy(() => import("../pages/Dispenser"));
const Error404 = lazy(() => import("../pages/Error404"));

const routes = [
  {
    path: RoutePath.LOGIN,
    element: (
      <Suspense fallback={<LoadingSpinner type="pageSpinner" color="accent" />}>
        <Login />
      </Suspense>
    ),
  },
  {
    path: RoutePath.ADMIN,
    element: (
      <ProtectedRoute>
        <Suspense
          fallback={<LoadingSpinner type="pageSpinner" color="accent" />}
        >
          <Dispensers />
        </Suspense>
      </ProtectedRoute>
    ),
  },
  {
    path: `${RoutePath.ADMIN_DISPENSERS}/:id`,
    element: (
      <ProtectedRoute>
        <Suspense
          fallback={<LoadingSpinner type="pageSpinner" color="accent" />}
        >
          <DispenserDetail />
        </Suspense>
      </ProtectedRoute>
    ),
  },
  {
    path: `${RoutePath.DISPENSER}/:id`,
    element: (
      <Suspense fallback={<LoadingSpinner type="pageSpinner" color="accent" />}>
        <Dispenser />
      </Suspense>
    ),
  },
  {
    path: "*",
    element: (
      <Suspense fallback={<LoadingSpinner type="pageSpinner" color="accent" />}>
        <Error404 />
      </Suspense>
    ),
  },
];

export default routes;
