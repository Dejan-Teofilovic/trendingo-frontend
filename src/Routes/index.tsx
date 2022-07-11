import { useRoutes } from 'react-router';
import MainLayout from '../layouts/MainLayout';
import { routes } from './routes';

export default function Routes() {
  return useRoutes([
    {
      element: <MainLayout />,
      children: routes
    }
  ])
}