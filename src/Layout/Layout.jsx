import React from "react";
import { SidebarProvider } from "../components/ui/sidebar";
import AppSidebar from "../components/AppSidebar";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Topbar from "../components/Topbar";

const Layout = () => {
  return (
    <SidebarProvider>
      <Topbar />
      <AppSidebar />
      <main className="w-full">
        <div className="min-h-[calc(100vh-58px)]  py-4 px-5 ">
          <Outlet />
        </div>
        <Footer />
      </main>
    </SidebarProvider>
  );
};

export default Layout;
