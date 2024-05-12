import { ReactNode, createContext, useState } from "react";

import "./Menu.css";

type Props = {
  /**
   * Children to be rendered inside
   */
  children?: ReactNode | ((args: MenuContextProps) => JSX.Element);
  /**
   * Additional classes to be added
   */
  className?: string;
  /**
   * Additional styles to be added
   */
  style?: React.CSSProperties;
  autoClose?: boolean;
};

interface MenuContextProps {
  autoClose: boolean;
  isOpen: boolean;
  toggle: () => void;
  close: () => void;
}

export const MenuContext = createContext({} as MenuContextProps);
const { Provider } = MenuContext;

const Menu = ({ children, className = "", style, autoClose = true }: Props) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };
  const close = () => {
    setIsOpen(false);
  };

  return (
    <Provider value={{ isOpen, toggle, close, autoClose }}>
      <div className={`menu ${className}`} style={style}>
        {typeof children === "function"
          ? children({ isOpen, toggle, close, autoClose })
          : children}
      </div>
    </Provider>
  );
};

export default Menu;
