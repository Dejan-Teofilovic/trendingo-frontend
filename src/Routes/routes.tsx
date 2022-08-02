import { Navigate } from "react-router";
import Home from "../pages/Home";
import Listing from "../pages/Listing";
import Trending from "../pages/Trending";
import Upvoting from "../pages/Upvoting";
import Development from "../pages/Development";
import TrendingService from "../pages/TrendingService";
import ListingService from "../pages/ListingService";
import UpvotingService from "../pages/UpvotingService";
import Cart from "../pages/Cart";
import Influence from "../pages/Influence";
import DevelopmentService from "../pages/DevelopmentService";

export const routes = [
  {
    name: 'Home',
    path: '/',
    element: <Home />
  },
  {
    name: 'Development services',
    path: '/development',
    element: <Development />,
    image: '/assets/images/development.jpg'
  },
  {
    name: 'Trending services',
    path: '/trending',
    element: <Trending />,
    image: '/assets/images/trending.jpg'
  },
  {
    name: 'Listing services',
    path: '/listing',
    element: <Listing />,
    image: '/assets/images/listing.jpg'
  },
  {
    name: 'Upvoting services',
    path: '/upvoting',
    element: <Upvoting />,
    image: '/assets/images/upvoting.jpg'
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
    path: '/development/:serviceName',
    element: <DevelopmentService />
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