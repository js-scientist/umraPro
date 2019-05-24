import React from "react";
import { Redirect } from "react-router-dom";

// Layout Types
import { DefaultLayout } from "./layouts";

// Route Views  
import BlogPostsMain from "./views/BlogPostsMain";
import UserProfileLite from "./views/UserProfileLite";
import AddNewPost from "./views/AddNewPost"; 
import Errors from "./views/Errors";
import ComponentsOverview from "./views/ComponentsOverview";
import Tables from "./views/Tables";
import SinglePage from "./views/SinglePage";
import BlogPosts from "./views/BlogPosts";

export default [


  {
    path: "/dashboard/user-profile-lite",
    layout: DefaultLayout,
    component: UserProfileLite
  },  {
      path: "/dashboard/all",
      layout: DefaultLayout,
      component: BlogPostsMain
    }, 
{
  path: "/dashboard/add-new-post",
  layout: DefaultLayout,
  component: AddNewPost
},
  {
    path: "/dashboard/single/:pid",
    layout: DefaultLayout,
    component: SinglePage
  },
  {
    path: "/dashboard/errors",
    layout: DefaultLayout,
    component: Errors
  },
  {
    path: "/dashboard/components-overview",
    layout: DefaultLayout,
    component: ComponentsOverview
  },
  {
    path: "/dashboard/tables",
    layout: DefaultLayout,
    component: Tables
  },
  {
    path: "/dashboard/blog-posts",
    layout: DefaultLayout,
    component: BlogPosts
  },
];
