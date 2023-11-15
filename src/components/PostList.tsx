"use client";

import { getPosts } from "@/redux/Slices/PostSlice";
import { AppDispatch } from "@/redux/Store";
import React from "react";
import { useDispatch } from "react-redux";

function PostList() {
  const dispatch = useDispatch<AppDispatch>();

  React.useEffect(() => {
    console.log("request dispatch");
    const args = {
      page: 2,
      catg: "home",
    };
    dispatch(getPosts(args));
  }, []);

  return <div>PostList</div>;
}

export default PostList;
