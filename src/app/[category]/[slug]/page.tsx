function BlogPage({ params }: { params: any }) {
  const slug = params.slug;

  return <article className='mt-12'>{slug}</article>;
}

export default BlogPage;
