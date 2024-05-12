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
};

interface MenuContextProps {
  isOpen: boolean;
  toggle: () => void;
}

export const MenuContext = createContext({} as MenuContextProps);
const { Provider } = MenuContext;

const Menu = ({ children, className = "", style }: Props) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Provider value={{ isOpen, toggle }}>
      <div className={`menu ${className}`} style={style}>
        {typeof children === "function"
          ? children({ isOpen, toggle })
          : children}
      </div>
    </Provider>
  );
};

export default Menu;
