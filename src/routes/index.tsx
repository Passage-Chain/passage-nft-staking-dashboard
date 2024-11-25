import Layout from "../layout";
import HomeView from "../views/homeview";
import RewardView from "../views/rewardview";
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
        path: "/reward",
        element: <RewardView />,
      },
    ],
  },
]);
