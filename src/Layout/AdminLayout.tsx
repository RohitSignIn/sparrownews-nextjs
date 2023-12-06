import Sidebar from "@/components/AdminComp/Sidebar";
import React from "react";

function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className='w-full h-screen'>
      <div className='flex flex-row w-full h-full justify-center items-center'>
        <Sidebar />
        <div id='main' className='flex-1 p-2 w-full h-full'>
          {children}
        </div>
      </div>
    </div>
  );
}

export default AdminLayout;
5;
