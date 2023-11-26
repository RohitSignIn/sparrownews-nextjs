"use client";

import MainLayout from "@/Layout/MainLayout";
import { getBlog } from "@/redux/Slices/BlogSlice";
import { AppDispatch, RootState } from "@/redux/Store";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import parse from "html-react-parser";

function BlogPage({ params }: { params: { category: string; slug: string } }) {
  const slug = params.slug;

  const dispatch = useDispatch<AppDispatch>();
  const postData = useSelector((state: RootState) => state.blogs);

  useEffect(() => {
    dispatch(getBlog({ slug }));
  }, [slug]);

  return (
    <>
      {!postData.loading && (
        <MainLayout>
          <article className='mt-12'>{parse(postData.blog.blog)}</article>
        </MainLayout>
      )}
    </>
  );
}

export default BlogPage;
