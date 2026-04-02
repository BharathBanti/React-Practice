import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css';
import AppLayout from './Layouts/AppLayout';
import Home from './pages/Home'
import About from './pages/About';
import Product from './pages/Product';
import Contact from './pages/Contact';
import Employees from './pages/Employees';
import Settings from './pages/Settings'
import Error from './components/Error';

import ShiftA from './pages/ShiftA';
import ShiftB from './pages/ShiftB';
import EmployeesLayout from './Layouts/EmployeesLayout';

function App() {
  const router = createBrowserRouter([
    {
      element: <AppLayout />,
      errorElement: <Error />,
      children: [
        {
          path: '/',
          element: <Home />
        },
        {
          path: '/about',
          element: <About />
        },
        {
          path: '/product',
          element: <Product />
        },
        {
          path: '/contact',
          element: <Contact />,
        },
        {
          path: '/employees',
          element: <EmployeesLayout />,
          children: [
            {
              path: 'shiftA',
              element: <ShiftA />
            },
            {
              path: 'shiftB',
              element: <ShiftB />
            }
          ]
        },
        {
          path: '/settings',
          element: <Settings />
        },
      ]
    }
  ])
  
  return <RouterProvider router={router} />
}

export default App
