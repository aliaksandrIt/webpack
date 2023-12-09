import { createRoot } from "react-dom/client";
import App from "./components/App";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { LazyAbout } from "@/pages/about/About.Lazy";
import { LazyShop } from "@/pages/shop/Shop.Lazy";
import { Suspense } from "react";
const root = document.getElementById("root");

if (!root) {
  throw new Error("root ins not defined");
}

const container = createRoot(root);

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/about",
        element: (
          <Suspense>
            <LazyAbout />
          </Suspense>
        ),
      },
      {
        path: "/shop",
        element: (
          <Suspense>
            <LazyShop />
          </Suspense>
        ),
      },
    ],
  },
]);

container.render(<RouterProvider router={router} />);
