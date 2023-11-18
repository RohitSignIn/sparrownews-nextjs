"use client";

import { getPosts } from "@/redux/Slices/PostSlice";
import { AppDispatch, RootState } from "@/redux/Store";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import SkeletonPostList from "./skeletons/SkeletonPostList";
import PostCard from "./PostCard";

function PostList() {
  const posts = useSelector((state: RootState) => state.posts);
  const dispatch = useDispatch<AppDispatch>();

  React.useEffect(() => {
    const args = {
      page: 2,
      catg: "home",
    };
    dispatch(getPosts(args));
  }, []);

  return (
    <div className='flex flex-col items-center'>
      {posts.loading ? (
        <SkeletonPostList />
      ) : (
        <>
          {posts.home.map((post) => (
            <PostCard key={post._id} post={post} />
          ))}
        </>
      )}
    </div>
  );
}

export default PostList;
