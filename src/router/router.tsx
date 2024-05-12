import { createBrowserRouter } from "react-router-dom";
import ButtonPage from "../pages/ButtonPage";
import DocsLayout from "../layout/docs/DocsLayout";
import ErrorPage from "../pages/ErrorPage";
import CardPage from "../pages/CardPage";
import IconPage from "../pages/IconPage";
import AlertPage from "../pages/AlertPage";
import { IconNames } from "../packages/icon/types";
import AboutPage from "../pages/AboutPage";
import MenuPage from "../pages/MenuPage";
import DialogPage from "../pages/DialogPage";
import InputPage from "../pages/InputPage";

export type RoutesProps = {
  path: string;
  element: JSX.Element;
  title: string;
  icon?: IconNames;
  subMenu?: string;
}[];

export const routes: RoutesProps = [
  {
    path: "/getting-started",
    element: <ButtonPage />,
    title: "Getting Started",
    icon: "code",
  },
  {
    path: "/about",
    element: <AboutPage />,
    title: "About",
    icon: "article",
  },
  {
    path: "/docs/components/button",
    element: <ButtonPage />,
    title: "Button",
    subMenu: "Components",
  },
  {
    path: "/docs/components/card",
    element: <CardPage />,
    title: "Card",
    subMenu: "Components",
  },
  {
    path: "/docs/components/icon",
    element: <IconPage />,
    title: "Icon",
    subMenu: "Components",
  },
  {
    path: "/docs/components/alert",
    element: <AlertPage />,
    title: "Aler",
    subMenu: "Components",
  },
  {
    path: "/docs/components/menu",
    element: <MenuPage />,
    title: "Menu",
    subMenu: "Components",
  },
  {
    path: "/docs/components/dialog",
    element: <DialogPage />,
    title: "Dialog",
    subMenu: "Components",
  },
  {
    path: "/docs/components/input",
    element: <InputPage />,
    title: "Input",
    subMenu: "Components",
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
