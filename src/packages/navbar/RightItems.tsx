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
};

/**
 *
 */
const RightItems = ({ children, className = "", style }: Props) => {
  return (
    <div className={`${styles.right_items} ${className}`} style={style}>
      {children}
    </div>
  );
};

export default RightItems;
