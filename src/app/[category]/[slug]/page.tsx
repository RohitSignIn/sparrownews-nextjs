import Header from "@/components/Header";

function BlogPage({ params }: { params: { category: string; slug: string } }) {
  const slug = params.slug;

  return;
  <>
    <Header />
    <article className='mt-12'>{slug}</article>;
  </>;
}

export default BlogPage;
