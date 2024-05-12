import { useContext } from "react";
import { DialogContext } from "./Dialog";
import Card from "../card/Card";

import "./Dialog.css";
import React from "react";

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

export const DialogContent = ({ children, className = "", style }: Props) => {
  const { isOpen } = useContext(DialogContext);
  return (
    <div
      draggable="true"
      className={`dialog ${isOpen ? "open" : "closed"} ${className}`}
      style={style}
    >
      <Card
        size="large"
        className={`dialog__content ${isOpen ? "open" : "closed"}`}
      >
        {children}
      </Card>
    </div>
  );
};

export default DialogContent;
