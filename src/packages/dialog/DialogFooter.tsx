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

export const DialogFooter = ({ children, className = "", style }: Props) => {
  return (
    <div className={`dialog__footer ${className}`} style={style}>
      {children}
    </div>
  );
};

export default DialogFooter;
