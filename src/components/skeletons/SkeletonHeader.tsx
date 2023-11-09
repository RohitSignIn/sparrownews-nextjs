import React from "react";

function SkeletonHeader() {
  return (
    <header className='h-[48px]'>
      <nav className='fixed h-[48px] top-0 bg-base-300 w-full flex justify-between px-4 py-2 border-b-4 border-base-100 items-center animate-pulse'>
        <div className='w-[12rem] h-[1.5rem] bg-neutral rounded-md'></div>
        <div className='flex justify-center gap-4'>
          <div className='w-[3rem] h-[1.5rem] bg-neutral rounded-md'></div>
          <div className='w-[6.3rem] h-[1.5rem] bg-neutral rounded-md'></div>
          <div className='w-[3.5rem] h-[1.5rem] bg-neutral rounded-md'></div>
          <div className='w-[3rem] h-[1.5rem] bg-neutral rounded-md'></div>
          <div className='w-[4rem] h-[1.5rem] bg-neutral rounded-md'></div>
        </div>
      </nav>
    </header>
  );
}

export default SkeletonHeader;
