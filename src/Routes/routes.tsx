import Home from "../pages/Home";
import Listing from "../pages/Listing";
import Service from "../pages/Service";
import Trending from "../pages/Trending";
import Upvoting from "../pages/Upvoting";

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
  },
  {
    path: '/:serviceTypeName/:serviceName',
    element: <Service />
  },
  {
    name: 'Upvoting services',
    path: '/upvoting',
    element: <Upvoting />
  },
  {
    name: 'Listing services',
    path: '/listing',
    element: <Listing />
  },
]