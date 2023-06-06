import Landing from "../pages/landing/Landing";
import Plus from "../pages/plus/Plus";
import Shelter from "../pages/shelter/Shelter";
import Safety from "../pages/safety/Safety";
import CreatePost from "../pages/createPost/CreatePost";
import PostList from "../pages/post/PostList";
import UpdatePost from "../pages/updatePost/UpdatePost";
import ViewPost from "../pages/viewPost/ViewPost";

export const ROUTE = {
  LANDING_PAGE: {
    path: "/",
    link: "/",
    element: Landing,
  },
  SHELTER_PAGE: {
    path: "/ShelterPage",
    link: "/ShelterPage",
    element: Shelter,
  },
  PLUS_PAGE: {
    path: "/PlusPage",
    link: "/PlusPage",
    element: Plus,
  },
  SAFETY_PAGE: {
    path: "/SafetyPage",
    link: "/SafetyPage",
    element: Safety,
  },
  CREATEPOST_PAGE: {
    path: "/CreatePostPage",
    link: "/CreatePostPage",
    element: CreatePost,
  },
  UPDATEPOST_PAGE: {
    path: "/UpdatePostPage",
    link: "/UpdatePostPage",
    element: UpdatePost,
  },
  POSTLIST_PAGE: {
    path: "/PostListPage",
    link: "/PostListPage",
    element: PostList,
  },
  VIEWPOST_PAGE: {
    path: "/ViewPostPage/:id",
    link: "/ViewPostPage/:id",
    element: ViewPost,
  },
};

export const ROUTE_ARR = Object.values(ROUTE);
