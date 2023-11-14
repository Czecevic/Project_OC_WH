import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Homepage } from "./pages/Homepage.tsx";
import { CurrentEmployees } from "./pages/CurrentEmployees.tsx";

export const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Homepage />,
    },
    {
      path: "/employee-list",
      element: <CurrentEmployees />,
    },
    {
      path: "/*",
      element: <h1>error 404</h1>,
    },
  ]);
  return <RouterProvider router={router} />;
};
