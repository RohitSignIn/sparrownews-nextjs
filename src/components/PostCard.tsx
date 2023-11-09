import Image from "next/image";
import React from "react";

function PostCard() {
  return (
    <div className='flex flex-col md:flex-row justify-center items-center md:items-start gap-4 bg-base-300 p-4 rounded-md md:w-[80%] m-2'>
      <div>
        <Image
          src='https://sparrownews.in/news/neeraj-chopra-return-to-competition.webp'
          width={350}
          height={240}
          alt='Picture of the author'
          className='rounded-md w-[350px] h-[240px] md:w-[180px] md:h-[100px]'
        />
      </div>
      <div className='w-[350px] md:w-full'>
        <h3 className='text-xl font-bold'>
          Post News Hello Helllo Hello Helllo Hello Helllo
        </h3>
        <p>
          Description Post News Hello Helllo Hello Helllo Hello Helllo Post News
          Hello Helllo Hello Helllo Hello Helllo Description Post News Hello
          Helllo Hello Helllo Hello Helllo Post News Hello Helllo Hello Helllo
          Hello Helllo
        </p>
      </div>
    </div>
  );
}

export default PostCard;
