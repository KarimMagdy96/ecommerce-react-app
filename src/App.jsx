import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import { Layout } from "./components/layout/Layout";
import { Home } from "./pages/home/Home";
import { About } from "./pages/about/About";
import { Shop } from "./pages/shop/Shop";
import { Contact } from "./pages/contact/Contact";
import { WishList } from "./pages/wishList/WishList";
import { Cart } from "./pages/cart/Cart";
import "swiper/css";

import {
  MobileHandlerContext,
  MobileHandlerProvider,
} from "./utils/mobilHundler";
import { MobileMenu } from "./components/mobilMenu/MobileMenu";
import { useContext } from "react";

function App() {
  const Routing = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/shop",
          element: <Shop />,
        },
        {
          path: "/contact",
          element: <Contact />,
        },
        {
          path: "/wishList",
          element: <WishList />,
        },
        {
          path: "/card",
          element: <Cart />,
        },
      ],
    },
  ]);

  return (
    <>
      <MobileHandlerProvider>
        <RouterProvider router={Routing} />
      </MobileHandlerProvider>
    </>
  );
}

export default App;
