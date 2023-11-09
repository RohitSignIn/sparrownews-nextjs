"use client";

import Link from "next/link";
import React from "react";
import Carousel from "./Carousel";
import { useDispatch, useSelector } from "react-redux/es/exports";
import { getCategories } from "@/redux/Slices/CategorySlice";
import { AppDispatch, RootState } from "@/redux/Store";
import SkeletonHeader from "./skeletons/SkeletonHeader";

export default function Header() {
  const dispatch = useDispatch<AppDispatch>();

  React.useEffect(() => {
    dispatch(getCategories());
  });

  const navLinks = useSelector((state: RootState) => state.categories);

  console.log(navLinks);
  return (
    <>
      {navLinks?.status == "success" ? (
        <header>
          <nav className='fixed top-0 bg-base-300 w-full flex justify-between px-4 py-2 border-b-4 border-base-100 items-center'>
            <h1 className='text-xl cursor-pointer tracking-wider text-primary'>
              SPARROW NEWS
            </h1>
            <section id='category'>
              {navLinks.categories.map((category) => {
                return (
                  <Link
                    key={category.catg}
                    className='px-2 py-2 text-primary hover:text-primary-focus transition-all ease-in'
                    href={`/${category.name}`}
                  >
                    {category.name}
                  </Link>
                );
              })}
            </section>
          </nav>
          <div className='mt-10'>
            <Carousel />
          </div>
        </header>
      ) : (
        <SkeletonHeader />
      )}
    </>
  );
}
