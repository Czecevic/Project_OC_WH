import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Homepage } from "./pages/Homepage.tsx";
import { CreateEmployee } from "./pages/CreateEmployees.tsx";
import { CurrentEmployees } from "./pages/CurrentEmployees.tsx";

export const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Homepage />,
    },
    {
      path: "/create-employee",
      element: <CreateEmployee />,
    },
    {
      path: "/employee-list",
      element: <CurrentEmployees />,
    },
    {
      path: "/*",
      element: (
        <div>
          <h1>error 404</h1>
          <a href="/">retourner a la page d'accueil</a>
        </div>
      ),
    },
  ]);
  return <RouterProvider router={router} />;
};
