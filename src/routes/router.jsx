import { createBrowserRouter } from "react-router-dom";
import { ROUTE_PATHS } from "@constants/routeConstants";

import DefaultLayout from "@layouts/DefaultLayout";
import { HomePage } from "@pages/homepage/HomePage";
import { AboutPage } from "@pages/aboutpage/AboutPage";
import {LoginPage} from "@pages/login/LoginPage";
import {JoinPage} from "@pages/login/JoinPage"
import { NotFoundLayout } from "@layouts/NotFoundLayout";
import {MainPage} from "@pages/community/MainPage";
import {PostWritePage} from "@pages/community/PostWritePage";
import {PostViewPage} from "@pages/community/PostViewPage";
import {FullBoard} from "@pages/community/FullBoard";
import {FreeBoard} from "@pages/community/FreeBoard";

export const router = createBrowserRouter([
  {
    path: ROUTE_PATHS.HOME,
    element: <DefaultLayout />,
    children: [
      {
        path: ROUTE_PATHS.HOME,
        element: <HomePage />,
      },
      {
        path: ROUTE_PATHS.ABOUT,
        element: <AboutPage />,
      },
      {
        path: ROUTE_PATHS.LOGIN,
        element: <LoginPage />,
      },
      {
        path: ROUTE_PATHS.JOIN,
        element: <JoinPage />
      },
      {
        path: ROUTE_PATHS.COMMUNITY,
        element: <MainPage />
      },
      {
        path: ROUTE_PATHS.POST_WRITE,
        element: <PostWritePage />
      },
      {
        path: ROUTE_PATHS.FULLBOARD,
        element: <FullBoard />
      },
      {
        path: ROUTE_PATHS.FREEBOARD,
        element: <FreeBoard />
      },
      {
        path: ROUTE_PATHS.POST_VIEW,
        element: <PostViewPage />
      },
    ],
    errorElement: <NotFoundLayout />,
  },
]);
