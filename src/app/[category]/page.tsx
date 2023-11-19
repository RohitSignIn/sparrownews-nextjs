function CategoryPage({ params }: { params: any }) {
  const catg = params.category;
  const slug = params.slug;

  return <div>{catg}</div>;
}

export default CategoryPage;
