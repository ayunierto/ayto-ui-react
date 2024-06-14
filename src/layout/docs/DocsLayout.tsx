import { useEffect } from "react";

import { NavLink, Outlet } from "react-router-dom";
import { cn } from "@/lib/utils";

import { ModeToggle } from "@/components/theme-toggle";
import { routes } from "../../router/router";
import { Button, buttonVariants } from "@/components/ui/button";
import {
  Navbar,
  NavbarLeftItems,
  NavbarRightItems,
} from "@/components/ui/navbar";
import { Icon } from "@/components/ui/icon";
import {
  Drawer,
  DrawerFooter,
  DrawerHeader,
  DrawerHeaderImg,
  DrawerHeaderInfo,
  DrawerHeaderInfoEmail,
  DrawerHeaderInfoName,
  DrawerMenu,
  DrawerMenuDropdown,
  DrawerMenuDropdownList,
  DrawerMenuDropdownTrigger,
  transformRoutes,
} from "@/components/ui/drawer";
import { Input } from "@/components/ui/input";
import { useActionController } from "@/components/hooks";

const DocsLayout = () => {
  const transformedRoutes = transformRoutes(routes);

  const { isOpen, toggle, open, close } = useActionController(false);

  const closeInMovileView = () => {
    if (window.innerWidth < 576) {
      close();
    }
  };
  useEffect(() => {
    if (window.innerWidth > 576) {
      open();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Navbar>
        <NavbarLeftItems>
          <Button
            onClick={toggle}
            variant="ghost"
            size={"icon"}
            className="md:hidden"
          >
            <Icon icon="menu" size="lg" />
          </Button>
          <span className="text-xl font-bold">BrandName</span>
        </NavbarLeftItems>
        <NavbarRightItems>
          <ModeToggle />
          <NavLink to={"/login"}>
            <Button variant="ghost">Login</Button>
          </NavLink>
          <NavLink to={"/register"}>
            <Button variant="ghost">Register</Button>
          </NavLink>
        </NavbarRightItems>
      </Navbar>

      <main className={`h-screen flex flex-row`}>
        <Drawer isOpen={isOpen} className="pt-16">
          <DrawerHeader>
            <DrawerHeaderImg />
            <DrawerHeaderInfo>
              <DrawerHeaderInfoName>John Doe</DrawerHeaderInfoName>
              <DrawerHeaderInfoEmail>john-doe@gmail.com</DrawerHeaderInfoEmail>
            </DrawerHeaderInfo>
          </DrawerHeader>

          <Input
            size="sm"
            className="h-full"
            contentAfter={<Icon hoverable icon="search" size="sm" />}
          />

          <DrawerMenu>
            {Object.entries(transformedRoutes).map((index) =>
              Array.isArray(index[1]) ? (
                <DrawerMenuDropdown key={index[0]}>
                  {({ isOpen }) => (
                    <>
                      <DrawerMenuDropdownTrigger>
                        <Button
                          variant={"ghost"}
                          className="w-full justify-between"
                        >
                          <span className="flex items-center gap-2">
                            <Icon icon="deployed_code" />
                            {index[0]}
                          </span>
                          <Icon
                            icon="keyboard_arrow_down"
                            className={` ${isOpen ? "rotate-180" : ""}`}
                          />
                        </Button>
                      </DrawerMenuDropdownTrigger>

                      <DrawerMenuDropdownList>
                        {Array.isArray(index[1]) &&
                          index[1].map((route) => (
                            <NavLink
                              key={route.path}
                              onClick={closeInMovileView}
                              to={route.path}
                              className={({ isActive }) =>
                                cn(
                                  buttonVariants({
                                    variant: "ghost",
                                    justify: "left",
                                  }),
                                  isActive
                                    ? "before:w-[3.5px] before:h-5 before:bg-primary before:rounded-2xl bg-hover p-0 transition-all gap-3"
                                    : ""
                                )
                              }
                            >
                              {route.title}
                            </NavLink>
                          ))}
                      </DrawerMenuDropdownList>
                    </>
                  )}
                </DrawerMenuDropdown>
              ) : (
                <NavLink
                  onClick={closeInMovileView}
                  key={index[1].path}
                  to={index[1].path}
                  className={({ isActive }) =>
                    cn(
                      buttonVariants({ variant: "ghost", justify: "left" }),
                      isActive
                        ? "before:w-[3.5px] before:h-5 before:bg-primary before:rounded-2xl bg-hover p-0 transition-all gap-3"
                        : ""
                    )
                  }
                >
                  <span className="flex items-center gap-2">
                    {index[1].icon && <Icon icon={index[1].icon} />}
                    {index[1].title}
                  </span>
                </NavLink>
              )
            )}
          </DrawerMenu>

          <DrawerFooter>
            <NavLink
              to="/settings"
              className={cn(
                buttonVariants({ variant: "ghost", justify: "left" })
              )}
            >
              <Icon icon="settings" /> Settings
            </NavLink>

            <NavLink
              to="/logout"
              className={cn(
                buttonVariants({ variant: "ghost", justify: "left" })
              )}
            >
              <Icon icon="logout" /> Logout
            </NavLink>
          </DrawerFooter>
        </Drawer>
        <div className="h-[calc(100vh-4rem)] overflow-y-scroll w-full p-4 mt-16 ">
          <Outlet />
        </div>
      </main>
    </>
  );
};

export default DocsLayout;
