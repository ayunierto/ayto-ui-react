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
};

const Navbar = ({
  children,
  className = "",
  style,
  position = "relative",
}: Props) => {
  return (
    <nav
      className={`${styles.navbar} ${className}`}
      style={{ position, ...style }}
    >
      {children}
    </nav>
  );
};

export default Navbar;
