import Carousel from "@/components/Carousel";
import Header from "@/components/Header";
import PostCard from "@/components/PostCard";
import SkeletonCarousel from "@/components/skeletons/SkeletonCarousel";
import SkeletonPostCard from "@/components/skeletons/SkeletonPostCard";

export default function Home() {
  return (
    <>
      <Header />
      <div className='mt-10'>
        {/* <Carousel /> */}
        <SkeletonCarousel />
      </div>

      <div className='flex flex-col items-center'>
        <SkeletonPostCard />
        <PostCard />
      </div>
    </>
  );
}
