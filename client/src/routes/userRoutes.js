import Home from "../components/Home";
import ListNews from "../components/ListNews";

import  { FE_CATEGORY_ROUTES } from "./FERoutes";

export const routes = [
  {
    path: "/",
    element: <Home />,
    children: [
      {
        path: "",
        children: [
          { path: FE_CATEGORY_ROUTES.thoisu.path, element: <ListNews topic={FE_CATEGORY_ROUTES.thoisu.topic} /> },
          { path: FE_CATEGORY_ROUTES.thegioi.path, element: <ListNews topic={FE_CATEGORY_ROUTES.thegioi.topic} /> },
          { path: FE_CATEGORY_ROUTES.kinhte.path, element: <ListNews topic={FE_CATEGORY_ROUTES.kinhte.topic} /> },
          { path: FE_CATEGORY_ROUTES.thethao.path, element: <ListNews topic={FE_CATEGORY_ROUTES.thethao.topic} /> },
          { path: FE_CATEGORY_ROUTES.giaitri.path, element: <ListNews topic={FE_CATEGORY_ROUTES.giaitri.topic} /> },
          { path: FE_CATEGORY_ROUTES.giaoduc.path, element: <ListNews topic={FE_CATEGORY_ROUTES.giaoduc.topic} /> },
          { path: FE_CATEGORY_ROUTES.suckhoe.path, element: <ListNews topic={FE_CATEGORY_ROUTES.suckhoe.topic} /> },
          { path: FE_CATEGORY_ROUTES.doisong.path, element: <ListNews topic={FE_CATEGORY_ROUTES.doisong.topic} /> },
          { path: FE_CATEGORY_ROUTES.phapluat.path, element: <ListNews topic={FE_CATEGORY_ROUTES.phapluat.topic} /> },
          { path: FE_CATEGORY_ROUTES.dulich.path, element: <ListNews topic={FE_CATEGORY_ROUTES.dulich.topic} /> },
          { path: FE_CATEGORY_ROUTES.khoahoc.path, element: <ListNews topic={FE_CATEGORY_ROUTES.khoahoc.topic} /> },
          { path: FE_CATEGORY_ROUTES.congnghe.path, element: <ListNews topic={FE_CATEGORY_ROUTES.congnghe.topic} /> },
        ],
      },
      { path: "*", element: (<div>This url is incorrect</div>) },
    ],
  },
];