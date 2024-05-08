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

/**
 *
 */
const App = ({ children, className = "", style }: Props) => {
  return (
    <div className={`${className}`} style={style}>
      {children}
    </div>
  );
};

export default App;
