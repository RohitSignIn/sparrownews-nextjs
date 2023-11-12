export type categoryType = {
  _id: String;
  catg: number;
  name: String;
  titles: String;
  keywords: String;
  descriptions: String;
};

export type categoriesInitialType = {
  categories: categoryType[];
  status: "loading" | "success";
};
