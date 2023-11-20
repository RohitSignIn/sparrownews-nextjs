"use client";

import Header from "@/components/Header";
import { getBlog } from "@/redux/Slices/BlogSlice";
import { AppDispatch } from "@/redux/Store";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

function BlogPage({ params }: { params: { category: string; slug: string } }) {
  const slug = params.slug;

  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(getBlog({ slug }));
  }, []);

  return (
    <>
      <Header />
      <article className='mt-12'>{slug}</article>
    </>
  );
}

export default BlogPage;
