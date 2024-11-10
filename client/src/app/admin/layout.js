import { SidebarComponent } from "@/components/components-sidebar";
import React from "react";

const Layout = ({ children }) => {
  return (
    <div className="flex flex-row">
      <SidebarComponent />
      {children}
    </div>
  );
};

export default Layout;
