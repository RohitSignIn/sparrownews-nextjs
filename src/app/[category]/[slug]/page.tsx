function BlogPage({ params }: { params: any }) {
  const slug = params.slug;

  return <div>{slug}</div>;
}

export default BlogPage;
