"use client";

import { getCarousels } from "@/redux/Slices/CarouselSlice";
import { AppDispatch, RootState } from "@/redux/Store";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import SkeletonCarousel from "./skeletons/SkeletonCarousel";

export default function Carousel() {
  const carousels = useSelector((state: RootState) => state.carousels);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(getCarousels());
  }, []);

  return (
    <>
      {!carousels.loading ? (
        <div className='carousel gap-2 rounded-box py-4 mx-4'>
          {carousels.posts.map((post) => {
            return (
              <div key={post._id} className='carousel-item'>
                <Link href={`/${post.category}/${post.slug}`}>
                  <Image
                    src={`${post.thumbnailUrl}`}
                    width={350}
                    height={240}
                    alt={`${post.title}`}
                    className='rounded-md w-[350px] h-[240px]'
                  />
                </Link>
              </div>
            );
          })}
        </div>
      ) : (
        <SkeletonCarousel />
      )}
    </>
  );
}
