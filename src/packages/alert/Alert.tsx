import Card from "../card/Card";

import "./Alert.css";

type Props = {
  /**
   * Children to be rendered inside to the Alert
   */
  children?: React.ReactNode;
  /**
   * Additional classes to be added to the Alert
   */
  className?: string;
  /**
   * Additional classes to be added to the Alert
   */
  style?: React.CSSProperties;
  /**
   * Colors of the Alert
   */
  color?: "primary" | "success" | "warning" | "error";
  /**
   * Sizes of the Alert
   */
  size?: "small" | "medium" | "large";
};

const Alert = ({
  children,
  className = "",
  style,
  color = "primary",
  size = "medium",
}: Props) => {
  return (
    <Card size={size} className={`alert ${color} ${className}`} style={style}>
      {children}
    </Card>
  );
};

export default Alert;
