import { createBrowserRouter } from 'react-router';
import Home from './pages/Home';
import AuthLayout from './layouts/AuthLayout';
import Login from './pages/Login';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <AuthLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
    ],
  },
  {
    path: '/login',
    element: <Login />,
  },
]);
