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
import {PrBoard} from "@pages/community/PrBoard";
import {FreeBoard} from "@pages/community/FreeBoard";
import { ReportPage } from "@pages/reportpage/ReportPage";
import { MyudchistoryPage } from "@pages/myudchistorypage/MyudchistoryPage";
import { UdcmanualPage } from "@pages/udcmanualpage/UdcmanualPage";
import { MyPostPage} from "@pages/community/MyPostPage";

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
        path: ROUTE_PATHS.REPORT,
        element: <ReportPage />,
      },
      {
        path: ROUTE_PATHS.MYUDCHISTORY,
        element: <MyudchistoryPage />,
      },
      {
        path: ROUTE_PATHS.UDCMANUAL,
        element: <UdcmanualPage />,
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
        path: ROUTE_PATHS.PRBOARD,
        element: <PrBoard />
      },
      {
        path: ROUTE_PATHS.FREEBOARD,
        element: <FreeBoard />
      },
      {
        path: ROUTE_PATHS.POST_VIEW,
        element: <PostViewPage />
      },
      {
        path: ROUTE_PATHS.MYPOST,
        element: <MyPostPage />
      },
    ],
    errorElement: <NotFoundLayout />,
  },
]);
