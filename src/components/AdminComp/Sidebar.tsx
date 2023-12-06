import Link from "next/link";
import React from "react";

function Sidebar() {
  return (
    <div id='sideNav' className='w-[250px] p-2 bg-primary h-full sticky top-0'>
      <Link
        className='block rounded-md hover:bg-slate-200 p-2 hover:text-slate-800'
        href='admin/add-post'
      >
        Add Post
      </Link>
      <Link
        className='block rounded-md hover:bg-slate-200 p-2 hover:text-slate-800'
        href='admin/posts'
      >
        Posts
      </Link>
      <Link
        className='block rounded-md hover:bg-slate-200 p-2 hover:text-slate-800'
        href='admin/logout'
      >
        Logout
      </Link>
      <Link
        className='block rounded-md hover:bg-slate-200 p-2 hover:text-slate-800'
        href='admin/settings'
      >
        Settings
      </Link>
    </div>
  );
}

export default Sidebar;
