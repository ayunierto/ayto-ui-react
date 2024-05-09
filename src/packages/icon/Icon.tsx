import styles from "./Icon.module.css";
import { IconNames } from "./types";

type Props = {
  hoverable?: boolean;
  /**
   * Action to execute
   */
  onClick?: () => void;
  /**
   * Custom class name for the icon
   */
  className?: string;
  /**
   * Size of the icon
   */
  size?: "small" | "medium" | "large";
  /**
   * Custom styles for the icon
   */
  style?: React.CSSProperties;
  /**
   * See icons in https://marella.me/material-symbols/demo/
   */
  icon: IconNames;
};

const Icon = ({
  className = "",
  style,
  icon,
  size = "medium",
  hoverable,
  onClick,
}: Props) => {
  onClick || hoverable === true ? (hoverable = true) : (hoverable = false);

  return (
    <span
      onClick={onClick}
      className={`${styles.icon} material-symbols-outlined  ${styles[size]} ${
        hoverable ? styles.hoverable : ""
      } ${className}`}
      style={style}
    >
      {icon}
    </span>
  );
};

export default Icon;
