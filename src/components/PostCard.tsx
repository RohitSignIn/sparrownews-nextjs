import { postType } from "@/types/postType";
import Image from "next/image";
import React from "react";

function PostCard({ post }: { post: postType }) {
  console.log(post, "YOBUDDY");
  return (
    <a
      href={`/${post.category}/${post.slug}`}
      className='flex flex-col md:flex-row justify-center items-center md:items-start gap-4 bg-base-300 p-4 rounded-md md:w-[80%] m-2'
    >
      <div>
        <Image
          src={`${post.thumbnailUrl}`}
          width={350}
          height={240}
          alt={`${post.title}`}
          className='rounded-md w-[350px] h-[240px] md:w-[180px] md:h-[100px]'
        />
      </div>
      <div className='w-[350px] md:w-full'>
        <h3 className='text-xl font-bold'>{post.title}</h3>
        <p>{post.description}</p>
      </div>
    </a>
  );
}

export default PostCard;
