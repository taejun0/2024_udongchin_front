import { createBrowserRouter } from "react-router-dom";
import { ROUTE_PATHS } from "@constants/routeConstants";

import DefaultLayout from "@layouts/DefaultLayout";
import { HomePage } from "@pages/homepage/HomePage";
import { AboutPage } from "@pages/aboutpage/AboutPage";
import { NotFoundLayout } from "@layouts/NotFoundLayout";
import { ReportPage } from "@pages/reportpage/ReportPage";
import { MyudchistoryPage } from "@pages/myudchistorypage/MyudchistoryPage";
import { UdcmanualPage } from "@pages/udcmanualpage/UdcmanualPage";

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
    ],
    errorElement: <NotFoundLayout />,
  },
]);
