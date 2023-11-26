export type blogType = {
  slug: {
    blog: string;
  };
};

export type blogStateType = {
  blog: {
    _id: string;
    post_id: string;
    slug: string;
    blog: string;
  };
  loading: boolean;
};

export type getBlogThunkParams = {
  slug: string;
};
