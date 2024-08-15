import { createBrowserRouter } from "react-router-dom";
import Dashboard from "./Pages/Dashboard";
import MainLayout from "./layouts/MainLayouts";
import Sales from "./Pages/Reports/Sales";
import Transaction from "./Pages/Reports/Transaction";
import Refund from "./Pages/Reports/Refund";
import Shift from "./Pages/Reports/Shift";
import ShiftByName from "./Pages/Reports/ShiftByName";
import Item from "./Pages/Library/Item";
import Category from "./Pages/Library/Category";
import Modifier from "./Pages/Library/Modifier";
import Discount from "./Pages/Library/Discount";
import SalesType from "./Pages/Library/SalesType";

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
      {
        path: "/refund",
        element: <Refund />,
      },
      {
        path: "/shift",
        element: <Shift />,
      },
      {
        path: "/shift-by-name",
        element: <ShiftByName />,
      },
      {
        path: "/library/item",
        element: <Item />,
      },
      {
        path: "/library/category",
        element: <Category />,
      },
      {
        path: "/library/modifier",
        element: <Modifier />,
      },
      {
        path: "/library/discount",
        element: <Discount />,
      },
      {
        path: "/library/sales-type",
        element: <SalesType />,
      },
    ]
  },
]);

export default router