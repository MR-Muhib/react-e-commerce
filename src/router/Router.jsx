import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Shop from "../pages/Shop";
import Root from "../pages/Root";

// dynamic pages for product
import SingleProductById from "../pages/single-product";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/shop", element: <Shop /> },
      { path: "/about", element: <About /> },
      { path: "/contact", element: <Contact /> },

      // add dynamic elements by id using home page product
      { path: "/single-product/:id", element: <SingleProductById /> },
    ],
  },
]);
