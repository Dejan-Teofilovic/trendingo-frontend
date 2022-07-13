import Home from "../pages/Home";
import Trending from "../pages/Trending";

export const routes = [
  {
    name: 'Home',
    path: '/',
    element: <Home />
  },
  {
    name: 'Trending services',
    path: '/trending',
    element: <Trending />
  }
]