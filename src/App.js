import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from '../src/components/Layout';
import Home from '../src/components/Home';
import Signup from '../src/components/Signup';
import Admin from '../src/components/Admin';
import './App.css';

const router = createBrowserRouter([
  {
    element: <Layout />,
    loader: null,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: null,
      },
      {
        path: "signup",
        element: <Signup />,
        loader: null,
      },
      {
        path: "admin",
        element: <Admin />,
        loader: null,
      }
    ]
  }
]);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
