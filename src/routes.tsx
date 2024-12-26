import { createBrowserRouter, Navigate } from "react-router-dom";
import Layout from "./views/Layout";
import Dashboard from "./views/Dashboard";
import Transactions from "./views/Transactions";
import Accounts from "./views/Accounts";
import Investments from "./views/Investments";
import CreditCards from "./views/CreditCards";
import Loans from "./views/Loans";
import Services from "./views/Services";
import MyPrevileges from "./views/MyPrevileges";
import Settings from "./views/Settings";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    children: [
      {
        index: true,
        element: <Navigate to="/dashboard" replace />,
      },
      {
        path: "dashboard",
        element: <Dashboard />,
      },
      {
        path: "transactions",
        element: <Transactions />,
      },
      {
        path: "accounts",
        element: <Accounts />,
      },
      {
        path: "investments",
        element: <Investments />,
      },
      {
        path: "credit-cards",
        element: <CreditCards />,
      },
      {
        path: "loans",
        element: <Loans />,
      },
      {
        path: "services",
        element: <Services />,
      },
      {
        path: "my-previleges",
        element: <MyPrevileges />,
      },
      {
        path: "setting",
        element: <Settings />,
      },
    ],
  },
]);