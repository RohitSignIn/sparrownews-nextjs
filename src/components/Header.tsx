import Link from "next/link";
import React from "react";
import Carousel from "./Carousel";

export default function Header() {
  return (
    <header>
      <nav className='fixed top-0 bg-base-300 w-full flex justify-between py-2 px-4 border-b-4 border-base-100'>
        <h1 className='text-xl cursor-pointer tracking-wider text-primary'>
          SPARROW NEWS
        </h1>
        <section id='category'>
          <Link
            className='px-2 py-2 text-primary hover:text-primary-focus transition-all ease-in'
            href=''
          >
            news
          </Link>
          <Link
            className='px-2 py-2 text-primary hover:text-primary-focus transition-all ease-in'
            href=''
          >
            entertainment
          </Link>
          <Link
            className='px-2 py-2 text-primary hover:text-primary-focus transition-all ease-in'
            href=''
          >
            politics
          </Link>
          <Link
            className='px-2 py-2 text-primary hover:text-primary-focus transition-all ease-in'
            href=''
          >
            sports
          </Link>
          <Link
            className='px-2 py-2 text-primary hover:text-primary-focus transition-all ease-in'
            href=''
          >
            esports
          </Link>
          <Link
            className='px-2 py-2 text-primary hover:text-primary-focus transition-all ease-in'
            href=''
          >
            gadgets
          </Link>
          <Link
            className='px-2 py-2 text-primary hover:text-primary-focus transition-all ease-in'
            href=''
          >
            articles
          </Link>
        </section>
      </nav>
      <div className='mt-10'>
        <Carousel />
      </div>
    </header>
  );
}
