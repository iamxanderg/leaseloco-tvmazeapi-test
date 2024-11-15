import PageNotFound from '@/components/page-not-found/PageNotFound';
import Dashboard from '@/pages/dashboard/Dashboard';
import ShowDetails from '@/pages/show-details/ShowDetails';
import { createBrowserRouter } from 'react-router-dom';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Dashboard />,
  },
  {
    path: '/shows/:id',
    element: <ShowDetails />,
  },
  {
    path: '*',
    element: <PageNotFound />,
  },
]);
