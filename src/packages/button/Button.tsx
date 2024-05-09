import styles from "./Button.module.css";

type Props = {
  /**
   * Children to be rendered inside the Button
   */
  children: React.ReactNode;
  /**
   * Additional classes to be added to the Button
   */
  className?: string;
  /**
   * Additional styles to be added to the Button
   */
  style?: React.CSSProperties;
  /**
   * Function to execute on click
   */
  onClick?: () => void;
  /**
   * Variant of the Button
   */
  variant?: "flat" | "solid" | "bordered";
  /**
   * Color of the Button
   */
  color?: "default" | "primary" | "success";
  /**
   * Size of the Button
   */
  size?: "small" | "medium" | "large";
  /**
   * Disabled state of the Button
   */
  disabled?: boolean;
  /**
   * Type of the Button
   */
  type?: "button" | "submit" | "reset";
  /**
   * Add full width to the Button
   */
  block?: boolean;
  /**
   * Justify content to start
   */
  contentLeft?: boolean;
};

const Button = ({
  children,
  className = "",
  style,
  onClick,
  color = "default",
  variant = "solid",
  size = "medium",
  disabled,
  type = "button",
  block,
  contentLeft,
  ...props
}: Props) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      type={type}
      className={`${styles[color]} ${styles[variant]} ${styles[size]} ${
        disabled ? styles.disabled : ""
      } ${block ? styles.block : ""} ${className} ${
        contentLeft ? styles.content__left : ""
      }`}
      style={style}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
