import { useEffect, useState } from "react";

import "./Drawer.css";

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
   * Default value 320.
   * Value in pixels.
   */
  width?: string;
  /**
   * Drawer top.
   * Default value 0px.
   * Value in pixels.
   * Use when the drawer is below a navbar.
   */
  top?: string;
  isOpen: boolean;
};

export const Drawer = ({
  children,
  className = "",
  style,
  width = "320px",
  top = "0px",
  isOpen,
}: Props) => {
  const [height, setHeight] = useState<string>();

  const topToNumber = (top: string) => {
    const transformed = top.substring(0, top.length - 1);
    return parseInt(transformed);
  };

  useEffect(() => {
    const handleResize = () => {
      setHeight(window.innerHeight - topToNumber(top) + "px");
    };

    setHeight(window.innerHeight - topToNumber(top) + "px");
    window.addEventListener("resize", handleResize);

    return () => {
      document.removeEventListener("resize", handleResize);
    };
  }, [top]);

  return (
    <nav
      className={`drawer ${isOpen ? "open" : "closed"} ${className}`}
      style={{ width, height: height, top, ...style }}
    >
      {children}
    </nav>
  );
};

export default Drawer;
