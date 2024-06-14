import { createBrowserRouter } from "react-router-dom";
import { IconNames } from "../components/ui/icon/types";
import { GettingStated } from "@/pages";
import DocsLayout from "@/layout/docs/DocsLayout";
import AboutPage from "@/pages/AboutPage";
import AlertPage from "@/pages/AlertPage";
import ButtonPage from "@/pages/ButtonPage";
import CardPage from "@/pages/CardPage";
import DialogPage from "@/pages/DialogPage";
import ErrorPage from "@/pages/ErrorPage";
import IconPage from "@/pages/IconPage";
import InputPage from "@/pages/InputPage";
import MenuPage from "@/pages/MenuPage";

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
    element: <GettingStated />,
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
    title: "Alert",
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
