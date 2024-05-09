import { NavLink } from "react-router-dom";
import Button from "../button/Button";
import Icon from "../icon/Icon";
import "./Drawer.css";
import { componentsRoutes, mainRoutes } from "../../router/router";
import { useState } from "react";

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

/**
 *
 */
const Drawer = ({
  children,
  className = "",
  style,
  width = "320px",
}: // navbarHeight = "0px",
Props) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };
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
        {mainRoutes.map((route) => (
          <NavLink
            key={route.path}
            to={route.path}
            className={({ isActive, isPending }) =>
              `${isPending ? "pending" : isActive ? "active" : ""}`
            }
          >
            <Button variant="flat" block contentLeft>
              <Icon icon={route.icon} />
              {route.title}
            </Button>
          </NavLink>
        ))}
        <div className="">
          <div className="">
            <Button
              onClick={toggle}
              variant="flat"
              block
              className="justify-between"
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
            {componentsRoutes.map((route) => (
              <NavLink
                key={route.path}
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
