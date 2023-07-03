import { useRoutes } from "react-router-dom"

import HomeLayout from "../components/shared/layouts/HomeLayout"
import Home from "../components/Home"

const Router = () => {
  let elements = useRoutes([
    {
      element: <HomeLayout />,
      children: [
        {
          path: '/',
          element: <Home />
        }
      ]
    }
  ]);

  return elements;
}

export default Router;
