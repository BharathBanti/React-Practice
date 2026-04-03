import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from 'react-router-dom';
import './App.css';
import AppLayout from './Layouts/AppLayout';
import Home from './pages/Home';
import About from './pages/About';
import Product from './pages/Product';
import Contact from './pages/Contact';
import Settings from './pages/Settings';
import Error from './components/Error';

import Shift from './pages/Shift';
import EmployeesLayout from './Layouts/EmployeesLayout';
import EmployeeDetailsCard from './components/EmployeeDetailsCard';
import { employeesLoader, employeesDetailsLoader } from './services/loaders';

function App() {
  const router = createBrowserRouter([
    {
      element: <AppLayout />,
      errorElement: <Error />,
      children: [
        {
          path: '/',
          element: <Home />,
        },
        {
          path: '/about',
          element: <About />,
        },
        {
          path: '/product',
          element: <Product />,
        },
        {
          path: '/contact',
          element: <Contact />,
        },
        {
          path: '/employees',
          element: <EmployeesLayout />,
          loader: employeesLoader,
          children: [
            {
              index: true,
              element: <Navigate to="shift-A" replace />,
            },
            {
              path: ':shift',
              element: <Shift />,
              children: [
                {
                  path: ':id',
                  element: <EmployeeDetailsCard />,
                  loader: employeesDetailsLoader,
                },
              ],
            },
            {
              path: '*',
              element: <Error />,
            },
          ],
        },
        {
          path: '/settings',
          element: <Settings />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
