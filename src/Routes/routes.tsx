import Home from "../pages/Home";
import Listing from "../pages/Listing";
import Service from "../pages/TrendingService";
import Trending from "../pages/Trending";
import Upvoting from "../pages/Upvoting";
import Development from "../pages/Development";
import TrendingService from "../pages/TrendingService";
import ListingService from "../pages/ListingService";

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
    name: 'Upvoting services',
    path: '/upvoting',
    element: <Upvoting />
  },
  {
    name: 'Listing services',
    path: '/listing',
    element: <Listing />
  },
  {
    path: '/trending/:serviceName',
    element: <TrendingService />
  },
  {
    path: '/listing/:serviceName',
    element: <ListingService />
  }
]