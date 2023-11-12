export type postType = {
  _id: String;
  category: String;
  title: String;
  keywords: String;
  description: String;
  thumbnailUrl: String;
  inCarousel: Boolean;
  body: String;
};

export type postsStateType = {
  home: {
    posts: postType[];
    loading: boolean;
  };
  news: {
    posts: postType[];
    loading: boolean;
  };
  entertainment: {
    posts: postType[];
    loading: boolean;
  };
  politics: {
    posts: postType[];
    loading: boolean;
  };
  sports: {
    posts: postType[];
    loading: boolean;
  };
  articles: {
    posts: postType[];
    loading: boolean;
  };
};
