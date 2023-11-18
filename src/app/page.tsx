import Carousel from "@/components/Carousel";
import Header from "@/components/Header";
import PostList from "@/components/PostList";
import SkeletonCarousel from "@/components/skeletons/SkeletonCarousel";

export default function Home() {
  return (
    <>
      <Header />
      <div className='mt-10'>
        <Carousel />
        <SkeletonCarousel />
      </div>
      {/* <PostCard /> */}
      <PostList />
    </>
  );
}
