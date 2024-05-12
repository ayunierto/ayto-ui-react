import { useContext } from "react";
import Button from "../button/Button";
import { MenuContext } from "./Menu";
import Icon from "../icon/Icon";
import { IconNames } from "../icon/types";

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
  label?: string;
  icon?: IconNames;
};

/**
 *
 */
const MenuTrigger = ({
  children,
  className = "",
  style,
  label = "Default label",
  icon,
}: Props) => {
  const { toggle, isOpen } = useContext(MenuContext);
  return (
    <div onClick={toggle} className={`${className}`} style={style}>
      {children || (
        <Button
          variant="flat"
          block
          style={{ justifyContent: "space-between" }}
        >
          <span className="flex gap-2">
            {icon && <Icon icon={icon} />}
            {label}
          </span>
          <Icon
            icon="keyboard_arrow_down"
            className={` ${isOpen ? "rotate-180" : ""}`}
          />
        </Button>
      )}
    </div>
  );
};

export default MenuTrigger;
