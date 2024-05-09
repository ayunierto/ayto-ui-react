import { createBrowserRouter } from "react-router-dom";
import ButtonPage from "../pages/ButtonPage";
import DocsLayout from "../layout/docs/DocsLayout";
import ErrorPage from "../pages/ErrorPage";
import CardPage from "../pages/CardPage";
import IconPage from "../pages/IconPage";

type ComponentsRoutesProps = {
  path: string;
  element: JSX.Element;
  title: string;
}[];

export const mainRoutes = [
  {
    path: "/getting-started",
    element: <ButtonPage />,
    title: "Getting Started",
    icon: "code",
  },
];

export const componentsRoutes: ComponentsRoutesProps = [
  {
    path: "/docs/components/button",
    element: <ButtonPage />,
    title: "Buttons",
  },
  {
    path: "/docs/components/card",
    element: <CardPage />,
    title: "Cards",
  },
  {
    path: "/docs/components/icon",
    element: <IconPage />,
    title: "Icons",
  },
];

export const router = createBrowserRouter([
  {
    path: "/",
    element: <DocsLayout />,
    errorElement: <ErrorPage />,
    children: [
      ...mainRoutes,
      ...componentsRoutes,
      {
        index: true,
        element: mainRoutes[0].element,
      },
    ],
  },
]);
