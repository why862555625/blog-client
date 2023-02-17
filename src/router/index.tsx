import layout from "./layout";
import { useRoutes, Navigate, createBrowserRouter } from "react-router-dom";
export default createBrowserRouter([
  {
    path: "/",
    element: layout("../page/Main"),
    errorElement: layout("../page/Error"),
  },
]);
