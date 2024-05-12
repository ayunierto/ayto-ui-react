import styles from "./Navbar.module.css";

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

  position?: "absolute" | "relative" | "fixed";
  /**
   * Navbar height.
   * Default value 50px.
   * Value in pixels.
   * Use mainly to adjust the content on the screen when the component is fixed on the screen.
   */
  height?: string;
};

export const Navbar = ({
  children,
  className = "",
  style,
  position = "relative",
  height = "50px",
}: Props) => {
  return (
    <nav
      className={`${styles.navbar} ${className}`}
      style={{ position, height, ...style }}
    >
      {children}
    </nav>
  );
};

export default Navbar;
