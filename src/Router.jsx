import { createBrowserRouter } from "react-router-dom";
import Dashboard from "./Pages/Dashboard";
import MainLayout from "./layouts/MainLayouts";
import Sales from "./Pages/Reports/Sales";
import Transaction from "./Pages/Reports/Transaction";

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
      {
        path: "/transaction",
        element: <Transaction />,
      },
    ]
  },
]);

export default router