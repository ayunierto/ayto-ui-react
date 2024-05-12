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

export const DrawerMenu = ({ children, className = "", style }: Props) => {
  return (
    <div className={`drawer__menu ${className}`} style={style}>
      {children}
    </div>
  );
};

export default DrawerMenu;
