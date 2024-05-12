import { Outlet } from "react-router-dom";

import Drawer from "./components/Sidebar";
import Nav from "./components/Nav";

export interface Settings {
  navbarHeight: string;
}

const settings = {
  navbarHeight: "60px",
};

const DocsLayout = () => {
  return (
    <>
      <Nav settings={settings} />
      <Drawer settings={settings} />

      <main
        style={{
          paddingTop: settings.navbarHeight,
          paddingLeft: "340px",
          paddingRight: "20px",
          paddingBottom: "20px",
        }}
      >
        <Outlet />
      </main>
    </>
  );
};

export default DocsLayout;
