import React from "react";
import "./Dialog.css";

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

export const DialogBody = ({ children, className = "", style }: Props) => {
  return (
    <div className={`dialog__body ${className}`} style={style}>
      {children}
    </div>
  );
};

export default DialogBody;
