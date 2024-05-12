import { useContext } from "react";
import { MenuContext } from "./Menu";

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

  floating?: boolean;

  position?: "left" | "right";
};

export const MenuList = ({
  children,
  className = "",
  style,
  floating = false,
  position = "left",
}: Props) => {
  const { isOpen } = useContext(MenuContext);
  return (
    <div
      className={`menu__list ${isOpen ? "open" : "closed"} ${
        floating ? "floating" : ""
      } ${position} ${className}`}
      style={style}
    >
      {children}
    </div>
  );
};

export default MenuList;
