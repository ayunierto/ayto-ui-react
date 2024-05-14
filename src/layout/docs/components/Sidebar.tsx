import { NavLink } from "react-router-dom";
import { routes } from "../../../router/router";
import { Settings } from "../DocsLayout";
import {
  Button,
  Drawer,
  DrawerFooter,
  DrawerHeader,
  DrawerHeaderImg,
  DrawerHeaderInfo,
  DrawerHeaderInforEmail,
  DrawerHeaderInforName,
  DrawerMenu,
  Icon,
  Input,
  Menu,
  MenuList,
  MenuTrigger,
  transformRoutes,
} from "../../../packages";

type Props = {
  settings: Settings;
  isOpen: boolean;
};

export const Sidebar = ({ settings, isOpen }: Props) => {
  const transformedRoutes = transformRoutes(routes);

  return (
    <Drawer top={settings.navbarHeight} isOpen={isOpen}>
      <DrawerHeader>
        <DrawerHeaderImg />
        <DrawerHeaderInfo>
          <DrawerHeaderInforName>John Doe</DrawerHeaderInforName>
          <DrawerHeaderInforEmail>john-doe@gmail.com</DrawerHeaderInforEmail>
        </DrawerHeaderInfo>
      </DrawerHeader>

      <Input
        size="small"
        contentAfter={<Icon hoverable icon="search" size="small" />}
      />

      <DrawerMenu>
        {Object.entries(transformedRoutes).map((index) =>
          Array.isArray(index[1]) ? (
            <Menu key={index[0]} autoClose={false}>
              <MenuTrigger>
                <Button
                  variant="flat"
                  block
                  style={{ justifyContent: "space-between" }}
                >
                  <span className="flex gap-2">
                    <Icon icon="deployed_code" />
                    {index[0]}
                  </span>
                  <Icon icon="keyboard_arrow_down" />
                </Button>
              </MenuTrigger>

              <MenuList>
                {index[1].map((route) => (
                  <NavLink
                    key={route.path}
                    to={route.path}
                    className={({ isActive, isPending }) =>
                      `${isPending ? "pending" : isActive ? "active" : ""}`
                    }
                  >
                    <Button variant="flat" block contentLeft>
                      {route.title}
                    </Button>
                  </NavLink>
                ))}
              </MenuList>
            </Menu>
          ) : (
            <NavLink
              key={index[1].path}
              to={index[1].path}
              className={({ isActive, isPending }) =>
                `${isPending ? "pending" : isActive ? "active" : ""}`
              }
            >
              <Button variant="flat" block contentLeft>
                {index[1].icon && <Icon icon={index[1].icon} />}
                {index[1].title}
              </Button>
            </NavLink>
          )
        )}
      </DrawerMenu>

      <DrawerFooter>
        <NavLink to="/settings" className={``}>
          <Button block variant="flat" contentLeft>
            <Icon icon="settings" /> Settings
          </Button>
        </NavLink>

        <NavLink to="/logout" className={``}>
          <Button block variant="flat" contentLeft>
            <Icon icon="logout" /> Logout
          </Button>
        </NavLink>
      </DrawerFooter>
    </Drawer>
  );
};

export default Sidebar;
