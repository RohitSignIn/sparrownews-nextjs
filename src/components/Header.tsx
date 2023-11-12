"use client";

import Link from "next/link";
import React from "react";
import { useDispatch, useSelector } from "react-redux/es/exports";
import { getCategories } from "@/redux/Slices/CategorySlice";
import { AppDispatch, RootState } from "@/redux/Store";
import SkeletonHeader from "./skeletons/SkeletonHeader";

export default function Header() {
  const dispatch = useDispatch<AppDispatch>();

  React.useEffect(() => {
    dispatch(getCategories());
  }, []);

  const navLinks = useSelector((state: RootState) => state.categories);

  return (
    <>
      <header>
        {!navLinks?.loading ? (
          <nav className='fixed top-0 bg-base-300 w-full flex justify-between px-4 py-2 border-b-4 border-base-100 items-center z-10'>
            <h1 className='text-xl cursor-pointer tracking-wider text-primary'>
              <Link href='/'>SPARROW NEWS</Link>
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
        ) : (
          <SkeletonHeader />
        )}
      </header>
    </>
  );
}
