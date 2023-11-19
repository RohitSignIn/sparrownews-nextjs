"use client";

import { getPosts } from "@/redux/Slices/PostSlice";
import { AppDispatch, RootState } from "@/redux/Store";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import SkeletonPostList from "./skeletons/SkeletonPostList";
import PostCard from "./PostCard";
import { postsStateType } from "@/types/postType";

function PostList({ catg }: { catg: string }) {
  const posts: postsStateType = useSelector((state: RootState) => state.posts);
  const dispatch = useDispatch<AppDispatch>();
  console.log(catg);
  React.useEffect(() => {
    const args = {
      page: 1,
      catg,
    };
    dispatch(getPosts(args));
  }, []);

  return (
    <div className='flex flex-col items-center'>
      {posts.loading ? (
        <SkeletonPostList />
      ) : (
        <>
          {Object.values(posts[catg as keyof typeof posts]).length ? (
            Object.values(posts[catg as keyof typeof posts]).map((post) => (
              <PostCard key={post._id} post={post} />
            ))
          ) : (
            <div>No Data Found</div>
          )}
        </>
      )}
    </div>
  );
}

export default PostList;
