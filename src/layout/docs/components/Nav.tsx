import { NavLink } from "react-router-dom";
import { Settings } from "../DocsLayout";
import { Button, Icon, LeftItems, Navbar, RightItems } from "../../../packages";

type Props = {
  settings: Settings;
};

const Nav = ({ settings }: Props) => {
  return (
    <Navbar position="fixed" height={settings.navbarHeight}>
      <LeftItems>
        <Button variant="flat" size="medium">
          <Icon icon="menu" size="large" />
        </Button>
      </LeftItems>
      <RightItems>
        <NavLink to={"/login"}>
          <Button variant="flat">Login</Button>
        </NavLink>
        <NavLink to={"/register"}>
          <Button variant="flat">Register</Button>
        </NavLink>
      </RightItems>
    </Navbar>
  );
};

export default Nav;
