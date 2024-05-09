import { NavLink, Outlet } from "react-router-dom";
import Navbar from "../../packages/navbar/Navbar";
import LeftItems from "../../packages/navbar/LeftItems";
import RightItems from "../../packages/navbar/RightItems";
import Button from "../../packages/button/Button";
import Icon from "../../packages/icon/Icon";

const DocsLayout = () => {
  return (
    <>
      <Navbar position="fixed">
        <LeftItems>
          <Button variant="flat">
            <Icon icon="menu" />
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

      <main className="pt-[80px] px-[20px]">
        <Outlet />
      </main>
    </>
  );
};

export default DocsLayout;
