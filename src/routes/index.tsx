import Layout from "../layout";
import HomeView from "../views/homeview";
import VaultDetailsView from "../views/vaultdetailsview";
import RewardView from "../views/rewardview";
import PortfolioView from "../views/portfolioview";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

export default function RouteProvider() {
  return <RouterProvider router={router} />;
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <HomeView />,
      },
      {
        path: "/vault/:id",
        element: <VaultDetailsView />,
      },
      {
        path: "/reward",
        element: <RewardView />,
      },
      {
        path: "/portfolio",
        element: <PortfolioView />,
       
      },
    ],
  },
]);
