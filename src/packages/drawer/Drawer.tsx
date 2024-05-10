import { NavLink } from "react-router-dom";
import Button from "../button/Button";
import Icon from "../icon/Icon";
import "./Drawer.css";
import { RoutesProps, routes } from "../../router/router";
import { useState } from "react";
import { IconNames } from "../icon/types";

type Props = {
  /**
   * Children to be rendered inside
   */
  children?: React.ReactNode;
  /**
   * Additional classes to be added
   */
  className?: string;
  /**
   * Additional styles to be added
   */
  style?: React.CSSProperties;
  /**
   * Drawer width.
   * Default value 320px
   */
  width?: string;
};

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

const Drawer = ({
  children,
  className = "",
  style,
  width = "320px",
}: Props) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };

  const transformRoutes = (originalRoutes: RoutesProps) => {
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

    return transformedRoutes;
  };

  const transformedRoutes = transformRoutes(routes);

  return (
    <div
      className={`drawer flex flex-col justify-between gap-1 ${className}`}
      style={{ width, ...style }}
    >
      <div className={`drawer__header`}>
        <div className={`drawer__header_avatar`}>
          <img src="/avatar-default.png" alt="avatar" />
        </div>
        <div className={`drawer__header__info`}>
          <span className={`drawer__header__info_name`}>Jhon Doe</span>
          <span className={`drawer__header__info_email`}>
            jhon-doe@gmail.com
          </span>
        </div>
      </div>

      <div className={``}>{/* <Input /> */}</div>

      <div className={`drawer__menu `}>
        {Object.entries(transformedRoutes).map((index) =>
          Array.isArray(index[1]) ? (
            <div className="menu">
              <div className="">
                <Button
                  onClick={toggle}
                  variant="flat"
                  block
                  style={{ justifyContent: "space-between" }}
                >
                  <span className="flex gap-2">
                    <Icon icon="deployed_code" />
                    Components
                  </span>
                  <Icon
                    icon="keyboard_arrow_down"
                    className={` ${isOpen ? "rotate-180" : ""}`}
                  />
                </Button>
              </div>
              <div
                className={`flex flex-col gap-1 transition-all mt-1 duration-300 origin-top ${
                  isOpen
                    ? "h-full opacity-100 scale-y-100"
                    : "h-0 opacity-0 scale-y-0"
                }`}
              >
                {index[1].map((route) => (
                  <NavLink
                    key={route.title}
                    to={route.path}
                    className={({ isActive, isPending }) =>
                      `${isPending ? "pending" : isActive ? "active" : ""}`
                    }
                  >
                    <Button variant="flat" block contentLeft className="pl-2">
                      {route.title}
                    </Button>
                  </NavLink>
                ))}
              </div>
            </div>
          ) : (
            <NavLink
              key={index[1].path}
              to={index[1].path}
              className={({ isActive, isPending }) =>
                `${isPending ? "pending" : isActive ? "active" : ""}`
              }
            >
              <Button variant="flat" block contentLeft>
                {index[1].icon && <Icon icon={index[1].icon} />}
                {index[1].title}
              </Button>
            </NavLink>
          )
        )}

        {/* {routes.map((route) => (
          <>
            {!route.subMenu ? (
              <NavLink
                key={route.path}
                to={route.path}
                className={({ isActive, isPending }) =>
                  `${isPending ? "pending" : isActive ? "active" : ""}`
                }
              >
                <Button variant="flat" block contentLeft>
                  {route.icon && <Icon icon={route.icon} />}
                  {route.title}
                </Button>
              </NavLink>
            ) : (
              ""
            )}
          </>
        ))} */}

        {/* <div className="menu">
          <div className="">
            <Button
              onClick={toggle}
              variant="flat"
              block
              style={{ justifyContent: "space-between" }}
            >
              <span className="flex gap-2">
                <Icon icon="deployed_code" />
                Components
              </span>
              <Icon
                icon="keyboard_arrow_down"
                className={` ${isOpen ? "rotate-180" : ""}`}
              />
            </Button>
          </div>
          <div
            className={`flex flex-col gap-1 transition-all mt-1 duration-300 origin-top ${
              isOpen
                ? "h-full opacity-100 scale-y-100"
                : "h-0 opacity-0 scale-y-0"
            }`}
          >
            {routes.map((route) => (
              <NavLink
                key={route.title}
                to={route.path}
                className={({ isActive, isPending }) =>
                  `${isPending ? "pending" : isActive ? "active" : ""}`
                }
              >
                <Button variant="flat" block contentLeft className="pl-2">
                  {route.title}
                </Button>
              </NavLink>
            ))}
          </div>
        </div> */}
      </div>

      <div className={`drawer__footer`}>
        <NavLink to="/settings" className={``}>
          <Button block variant="flat" contentLeft>
            <Icon icon="settings" /> Settings
          </Button>
        </NavLink>

        <NavLink to="/logout" className={``}>
          <Button block variant="flat" contentLeft>
            <Icon icon="logout" /> Logout
          </Button>
        </NavLink>
      </div>
      {children}
    </div>
  );
};

export default Drawer;
