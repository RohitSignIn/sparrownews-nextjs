import MainLayout from "@/Layout/MainLayout";
import Carousel from "@/components/Carousel";
import PostList from "@/components/PostList";

export default function Home() {
  return (
    <>
      <MainLayout>
        <div className='mt-10'>
          <Carousel />
        </div>
        {/* <PostCard /> */}
        <PostList catg='home' />
      </MainLayout>
    </>
  );
}
