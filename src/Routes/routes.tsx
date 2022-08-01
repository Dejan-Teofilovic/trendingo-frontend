import Home from "../pages/Home";
import Listing from "../pages/Listing";
import Trending from "../pages/Trending";
import Upvoting from "../pages/Upvoting";
import Development from "../pages/Development";
import TrendingService from "../pages/TrendingService";
import ListingService from "../pages/ListingService";
import UpvotingService from "../pages/UpvotingService";
import Cart from "../pages/Cart";
import { Navigate } from "react-router";
import Influence from "../pages/Influence";

export const routes = [
  {
    name: 'Home',
    path: '/',
    element: <Home />
  },
  {
    name: 'Development services',
    path: '/development',
    element: <Development />
  },
  {
    name: 'Trending services',
    path: '/trending',
    element: <Trending />
  },
  {
    name: 'Listing services',
    path: '/listing',
    element: <Listing />
  },
  {
    name: 'Upvoting services',
    path: '/upvoting',
    element: <Upvoting />
  },
  {
    path: '/trending/:serviceName',
    element: <TrendingService />
  },
  {
    path: '/listing/:serviceName',
    element: <ListingService />
  },
  {
    path: '/upvoting/:serviceName',
    element: <UpvotingService />
  },
  {
    path: '/cart',
    element: <Cart />
  },
  {
    path: '/influence/:influenceToken',
    element: <Influence />
  },
  {
    path: '*',
    element: <Navigate to="/" replace />
  }
]