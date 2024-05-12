type Props = {
  /**
   * Children to be rendered inside
   */
  src?: string;
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
export const DrawerHeaderImg = ({
  className = "",
  style,
  src = "/avatar-default.png",
}: Props) => {
  return (
    <img
      src={src}
      alt="avatar"
      className={`drawer__header_avatar ${className}`}
      style={style}
    />
  );
};

export default DrawerHeaderImg;
