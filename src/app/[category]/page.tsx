import Header from "@/components/Header";
import PostList from "@/components/PostList";

function CategoryPage({ params }: { params: any }) {
  const catg = params.category;

  return (
    <>
      <Header />
      <div className='mt-12'>
        <PostList catg={catg} />
      </div>
    </>
  );
}

export default CategoryPage;
