import { createBrowserRouter } from "react-router-dom";
import ButtonPage from "../pages/ButtonPage";
import DocsLayout from "../layout/docs/DocsLayout";
import ErrorPage from "../pages/ErrorPage";
import CardPage from "../pages/CardPage";
import IconPage from "../pages/IconPage";

export const routes = [
  {
    path: "/docs/button",
    element: <ButtonPage />,
  },
  {
    path: "/docs/card",
    element: <CardPage />,
  },
  {
    path: "/docs/icon",
    element: <IconPage />,
  },
];

export const router = createBrowserRouter([
  {
    path: "/",
    element: <DocsLayout />,
    errorElement: <ErrorPage />,
    children: [
      ...routes,
      {
        index: true,
        element: routes[0].element,
      },
    ],
  },
]);
