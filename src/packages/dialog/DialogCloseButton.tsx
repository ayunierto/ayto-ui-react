import React from "react";
import { useContext } from "react";
import Button from "../button/Button";
import { DialogContext } from "./Dialog";

import "./Dialog.css";

type Props = {
  children?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
};

export const DialogCloseButton = ({
  children,
  className = "",
  style,
}: Props) => {
  const { close } = useContext(DialogContext);
  return (
    <Button
      variant="flat"
      onClick={close}
      className={`${className}`}
      style={style}
    >
      {children || "Close"}
    </Button>
  );
};

export default DialogCloseButton;
