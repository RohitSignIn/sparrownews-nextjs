import Image from "next/image";
import React from "react";

function SkeletonPostCard() {
  return (
    <div className='animate-pulse flex flex-col md:flex-row justify-center items-center md:items-start gap-4 bg-base-300 p-4 rounded-md md:w-[80%] m-2'>
      <div>
        <div className='rounded-md w-[350px] h-[240px] md:w-[180px] md:h-[100px] bg-neutral'></div>
      </div>
      <div className='w-full'>
        <div className='text-xl font-bold bg-neutral w-full h-6'></div>
        <div className='mt-2 w-full bg-neutral h-4'></div>
        <div className='mt-2 w-[50%] bg-neutral h-4'></div>
      </div>
    </div>
  );
}

export default SkeletonPostCard;
