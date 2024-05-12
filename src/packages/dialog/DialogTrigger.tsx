import { useContext } from "react";
import { DialogContext } from "./Dialog";

type Props = {
  /**
   * Children to render in the component
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
   * Function to execute on click
   */
  onClick?: () => void;
};

export const DialogTrigger = ({
  children,
  className = "",
  style,
  onClick,
}: Props) => {
  const { open } = useContext(DialogContext);
  return (
    <div
      onClick={onClick ? onClick : open}
      className={`${className}`}
      style={{ cursor: "pointer", ...style }}
    >
      {children}
    </div>
  );
};

export default DialogTrigger;
