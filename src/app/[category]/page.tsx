import MainLayout from "@/Layout/MainLayout";
import PostList from "@/components/PostList";

function CategoryPage({ params }: { params: { category: string } }) {
  const catg = params.category;

  return (
    <>
      <MainLayout>
        <div className='mt-12'>
          <PostList catg={catg} />
        </div>
      </MainLayout>
    </>
  );
}

export default CategoryPage;
