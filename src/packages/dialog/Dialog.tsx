import { ReactNode, createContext, useState } from "react";
import "./Dialog.css";
import { useActionController } from "../hooks";

type Props = {
  /**
   * Function that returns a JSX with the values to control the dialog
   */
  children: ((args: DialogContextProps) => JSX.Element) | ReactNode;
  /**
   * Additional classes to be added to the Dialog
   */
  className?: string;
  /**
   * Additional styles to be added to the Dialog
   */
  style?: React.CSSProperties;
};

interface DialogContextProps {
  isOpen: boolean;
  open: () => void;
  close: () => void;
}

export const DialogContext = createContext({} as DialogContextProps);
const { Provider } = DialogContext;

export const Dialog = ({ children, className = "", style }: Props) => {
  const { isOpen, open, close } = useActionController(false);

  return (
    <Provider value={{ isOpen, open, close }}>
      <div className={`${className}`} style={style}>
        {typeof children === "function"
          ? children({ isOpen, open, close })
          : children}
      </div>
    </Provider>
  );
};

export default Dialog;
