type Props = {
  /**
   * Email
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
export const DrawerHeaderInforEmail = ({
  children,
  className = "",
  style,
}: Props) => {
  return (
    <span className={`drawer__header__info_email ${className}`} style={style}>
      {children}
    </span>
  );
};

export default DrawerHeaderInforEmail;
