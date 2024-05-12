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

export const DrawerFooter = ({ children, className = "", style }: Props) => {
  return (
    <div className={`drawer__footer ${className}`} style={style}>
      {children}
    </div>
  );
};

export default DrawerFooter;
