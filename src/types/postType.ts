import React from "react";

export type postType = {
  _id: React.Key;
  category: String;
  title: String;
  slug: String;
  keywords: String;
  description: String;
  thumbnailUrl: String;
  inCarousel: Boolean;
};

export type postsStateType = {
  home: postType[];
  news: postType[];
  entertainment: postType[];
  politics: postType[];
  sports: postType[];
  articles: postType[];
  loading: boolean;
};

export type getPostsThunkRet = String;

export type getPostsThunkParams = {
  page: number;
  catg: String;
};
