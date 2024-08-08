import { createBrowserRouter } from "react-router-dom";
import Dashboard from "./Pages/Reports/Dashboard";
import MainLayout from "./layouts/MainLayouts";
import Sales from "./Pages/Reports/Sales";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: '',
        element: <Dashboard />
      },
      {
        path: "/sales",
        element: <Sales />,
      },
    ]
  },
]);

export default router