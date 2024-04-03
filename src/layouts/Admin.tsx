import React, { ReactNode, useContext, useEffect, useState } from "react";
import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

import Header from "@/layouts/Header";
import Sidebar from "@/layouts/Sidebar";


interface AdminProps {
  type?: "primary" | "secondary";
  children: ReactNode;
  // searchFunction: () => void;
}

const AdminLayout: React.FC<AdminProps> = ({ type = "primary", children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);

  return (
    <>
          <div className="flex h-screen w-screen flex-col justify-between overflow-hidden md:flex-row">
            <Sidebar
              sidebarOpen={sidebarOpen}
              setSidebarOpen={setSidebarOpen}
            />
            <div className="no-scroll-scrollbar flex grow flex-col overflow-x-hidden overflow-y-scroll">
              <div className="flex w-full bg-slate-100 px-4 md:px-10">
                {children}
              </div>
            </div>
          </div>

        <ToastContainer />
    </>
  );
};

export default AdminLayout;
