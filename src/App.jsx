import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import { Layout } from "./components/layout/Layout";
import { Home } from "./pages/home/Home";
import { About } from "./pages/about/About";
import { Shop } from "./pages/shop/Shop";
import { Contact } from "./pages/contact/Contact";
import { WishList } from "./pages/wishList/WishList";
import { Cart } from "./pages/cart/Cart";

function App() {
  const router = createBrowserRouter([
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
      <mobilHandlerProvider>
        <RouterProvider router={router} />
      </mobilHandlerProvider>
    </>
  );
}

export default App;
