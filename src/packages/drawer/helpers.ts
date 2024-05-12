import { RoutesProps } from "../../router/router";
import { IconNames } from "../icon/types";

interface TransformRoutes {
  [name: number | string]:
    | {
        path: string;
        title: string;
        icon: IconNames;
      }
    | {
        path: string;
        title: string;
      }[];
}

export const transformRoutes = (originalRoutes: RoutesProps) => {
  const transformedRoutes: TransformRoutes = {};
  let componentIndex = 1;

  originalRoutes.forEach((route) => {
    if (route.subMenu) {
      if (!transformedRoutes[route.subMenu]) {
        transformedRoutes[route.subMenu] = [];
      }
      transformedRoutes[route.subMenu].push({
        path: route.path,
        title: route.title,
      });
    } else {
      transformedRoutes[componentIndex] = {
        path: route.path,
        title: route.title,
        icon: route.icon!,
      };
      componentIndex++;
    }
  });

  // console.log(transformedRoutes);
  return transformedRoutes;
};
