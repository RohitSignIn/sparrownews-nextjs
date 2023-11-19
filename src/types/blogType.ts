export type blogType = {
  slug: {
    blog: string;
  };
};

export type blogStateType = {
  blogs: blogType[];
  loading: boolean;
};

export type getBlogThunkParams = {
  slug: string;
};
