import { Outlet } from "react-router-dom";

import { Sidebar } from "./components/Sidebar";
import Nav from "./components/Nav";
import { useState } from "react";

export interface Settings {
  navbarHeight: string;
}

const settings = {
  navbarHeight: "60px",
};

const DocsLayout = () => {
  const [isOpen, setIsOpen] = useState<boolean>(true);
  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <Nav settings={settings} toggleSidebar={toggle} />
      <Sidebar settings={settings} isOpen={isOpen} />

      <main
        style={{
          paddingTop: settings.navbarHeight,
          paddingLeft: isOpen ? "340px" : "20px",
          paddingRight: "20px",
          paddingBottom: "20px",
          transition: "all .3s",
        }}
      >
        <Outlet />
      </main>
    </>
  );
};

export default DocsLayout;
