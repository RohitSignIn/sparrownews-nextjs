import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Carousel() {
  return (
    <div className='carousel gap-2 rounded-box py-4 mx-4'>
      <div className='carousel-item'>
        <Link href={""}>
          <Image
            src='https://sparrownews.in/news/neeraj-chopra-return-to-competition.webp'
            width={350}
            height={240}
            alt='Picture of the author'
            className='rounded-md w-[350px] h-[240px]'
          />
        </Link>
      </div>
      <div className='carousel-item'>
        <Link href={""}>
          <Image
            src='https://sparrownews.in/news/power-book-two.webp'
            width={350}
            height={240}
            alt='Picture of the author'
            className='rounded-md w-[350px] h-[240px]'
          />
        </Link>
      </div>
      <div className='carousel-item'>
        <Link href={""}>
          <Image
            src='https://sparrownews.in/news/taylor-swift-new-album-red.webp'
            width={350}
            height={240}
            alt='Picture of the author'
            className='rounded-md w-[350px] h-[240px]'
          />
        </Link>
      </div>
      <div className='carousel-item'>
        <Link href={""}>
          <Image
            src='https://sparrownews.in/news/taylor-swift-new-album-red.webp'
            width={350}
            height={240}
            alt='Picture of the author'
            className='rounded-md w-[350px] h-[240px]'
          />
        </Link>
      </div>
      <div className='carousel-item'>
        <Link href={""}>
          <Image
            src='https://sparrownews.in/news/power-book-two.webp'
            width={350}
            height={240}
            alt='Picture of the author'
            className='rounded-md w-[350px] h-[240px]'
          />
        </Link>
      </div>
      <div className='carousel-item'>
        <Link href={""}>
          <Image
            src='https://sparrownews.in/news/power-book-two.webp'
            width={350}
            height={240}
            alt='Picture of the author'
            className='rounded-md w-[350px] h-[240px]'
          />
        </Link>
      </div>
    </div>
  );
}
