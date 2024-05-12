import React from "react";
import "./Input.css";

type Props = {
  /**
   * Additional classes to be added to the Button
   */
  className?: string;
  /**
   * Additional styles to be added to the Button
   */
  style?: React.CSSProperties;
  type?: React.HTMLInputTypeAttribute;
  placeholder?: string;
  value?: string;
  onChange?: () => void;
  contentBefore?: React.ReactNode;
  contentAfter?: React.ReactNode;
  id?: string;
  size?: "small" | "medium" | "large";
};

export const Input = ({
  className = "",
  style,
  type = "text",
  placeholder,
  value,
  onChange,
  contentAfter,
  contentBefore,
  id,
  size = "medium",
  ...props
}: Props) => {
  return (
    <div className="input">
      {contentBefore}
      <input
        id={id}
        type={type}
        className={`${size} ${className}`}
        style={style}
        {...props}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
      {contentAfter}
    </div>
  );
};

export default Input;
