import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';
import HomePage from './pages/HomePage';
import About from './pages/About';
import Error from './components/Error';
import Product from './pages/Product';
import Contact from './pages/Contact';
import RootLayout from './layout/RootLayout';
import ContactLayout from './layout/ContactLayout';
import ContactInfo from './components/ContactInfo';
import ContactForm from './components/ContactForm';
import NotFound from './components/NotFound';
import JobsLayout from './layout/JobsLayout';
import Jobs, { jobsLoader } from './pages/Jobs';
import JobDetails, { JobDetailsLoader } from './components/JobDetails';

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route index element={<HomePage />} />
        <Route path="product" element={<Product />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<ContactLayout />}>
          <Route path="info" element={<ContactInfo />} />
          <Route path="form" element={<ContactForm />} />
        </Route>
        <Route path="jobs" element={<JobsLayout />}  errorElement={<Error/>}>
          <Route index element={<Jobs />} loader={jobsLoader} />
          <Route path=':id' element={<JobDetails />} loader={JobDetailsLoader} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Route>
    )
  );

  return (
    <div className="min-h-screen bg-white">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
