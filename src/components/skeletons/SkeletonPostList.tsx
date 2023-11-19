import React from "react";
import SkeletonPostCard from "./SkeletonPostCard";

function SkeletonPostList() {
  const postsSkeleton = [1, 2, 3, 4];

  return (
    <>
      {postsSkeleton.map((idx) => (
        <SkeletonPostCard key={idx} />
      ))}
    </>
  );
}

export default SkeletonPostList;
