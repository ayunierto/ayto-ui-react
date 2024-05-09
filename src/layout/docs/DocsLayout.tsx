import { NavLink, Outlet } from "react-router-dom";
import Navbar from "../../packages/navbar/Navbar";
import LeftItems from "../../packages/navbar/LeftItems";
import RightItems from "../../packages/navbar/RightItems";
import Button from "../../packages/button/Button";
import Icon from "../../packages/icon/Icon";
import Drawer from "../../packages/drawer/Drawer";

const DocsLayout = () => {
  return (
    <div>
      <Navbar position="fixed">
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

      <Drawer></Drawer>

      <main className="pt-[60px] pl-[340px] pr-[20px]">
        <Outlet />
      </main>
    </div>
  );
};

export default DocsLayout;
