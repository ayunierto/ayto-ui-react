import "./Card.css";

type Props = {
  /**
   * Chindren to be rendered inside the Card
   */
  children?: React.ReactNode;
  /**
   * Additional classes to be added to the Card
   */
  className?: string;
  /**
   * Additional style to be added to the Card
   */
  style?: React.CSSProperties;
  /**
   * Add Shadow on the Card
   */
  shadow?: boolean;
  /**
   * Sizes of the card
   */
  size?: "small" | "medium" | "large";
  /**
   * Variant of the Button
   */
  variant?: "flat" | "solid" | "bordered";
  /**
   * Highlight on mouseover
   */
  hoverable?: boolean;
};

export const Card = ({
  children,
  className,
  style,
  shadow,
  size = "medium",
  variant = "solid",
  hoverable = false,
}: Props) => {
  const styles = {
    base: "border border-[#1d1931] rounded-lg transition-all duration-300 bg-[#262c37]",
    variant: {
      flat: "bg-transparent",
      solid: "",
      bordered: "bg-transparent border-[#353050]",
    },
    size: {
      small: "p-3",
      medium: "p-4",
      large: "p-5",
    },
  };

  return (
    <div
      className={`card ${variant} ${styles.size[size]} ${
        shadow ? "shadow" : ""
      } ${hoverable ? "hover" : ""} ${className}`}
      style={style}
    >
      {children}
    </div>
  );
};

export default Card;
