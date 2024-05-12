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

export const DialogTitle = ({ children, className = "", style }: Props) => {
  return (
    <h2 className={`${className}`} style={style}>
      {children}
    </h2>
  );
};

export default DialogTitle;
