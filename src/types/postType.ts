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
  };
  news: {
    posts: postType[];
  };
  entertainment: {
    posts: postType[];
  };
  politics: {
    posts: postType[];
  };
  sports: {
    posts: postType[];
  };
  articles: {
    posts: postType[];
  };
  loading: boolean;
};

export type getPostsThunkRet = String;

export type getPostsThunkParams = {
  page: number;
  catg: String;
};
