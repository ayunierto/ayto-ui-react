type Props = {
  /**
   * Username
   */
  children: string;
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
export const DrawerHeaderInforName = ({
  children,
  className = "",
  style,
}: Props) => {
  return (
    <span className={`drawer__header__info_name ${className}`} style={style}>
      {children}
    </span>
  );
};

export default DrawerHeaderInforName;
