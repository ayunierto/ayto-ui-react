import "./Dialog.css";

type Props = {
  /**
   * Children to render in the component
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

export const DialogHeader = ({ children, className = "", style }: Props) => {
  return (
    <div className={`dialog__header ${className}`} style={style}>
      {children}
    </div>
  );
};

export default DialogHeader;
