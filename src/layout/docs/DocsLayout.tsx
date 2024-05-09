import { Outlet } from "react-router-dom";
import Navbar from "../../packages/navbar/Navbar";

const DocsLayout = () => {
  return (
    <>
      <Navbar></Navbar>

      <main className="p-6">
        <Outlet />
      </main>
    </>
  );
};

export default DocsLayout;
