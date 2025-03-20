import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import { Home } from './components/Home';
import Login from './components/Login';
import Signup from "./components/Signup";
import ServiceCards from './components/ServiceCards';
import PricingSection from './components/PricingTable';
import ContactUs from './components/ContactUs';
import UserSearch from './components/UserSearch';

const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '/signup',
    element: <Signup />
  },
  {
    path: '/services',
    element: <ServiceCards />
  },
  {
    path: '/pricing',
    element: <PricingSection />
  },
  {
    path: '/contactUs',
    element: <ContactUs />
  },
  {
    path: '/search',
    element: <UserSearch />
  }
]);

function App() {
  return (
    <>
      <RouterProvider router={appRouter} />
    </>
  );
}

export default App;
