import styles from "./Card.module.css";

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
   * Additional styles to be added to the Card
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
   * Highlight on mouseover
   */
  hoverable?: boolean;
};

const Card = ({
  children,
  className,
  style,
  shadow,
  size = "medium",
  hoverable = false,
}: Props) => {
  return (
    <div
      className={`${styles.card} ${styles[size]} ${
        shadow ? styles.shadow : ""
      } ${hoverable ? styles.hoverable : ""} ${className}`}
      style={style}
    >
      {children}
    </div>
  );
};

export default Card;
