import { About } from "../pages/About/About";
import { Blog } from "../pages/Blog/Blog";
import { Home } from "../pages/Home/Home";
import { Work } from "../pages/Work/Work";

export const router = [
  {
    element: <About />,
    path: "/about",
  },
  {
    element: <Work />,
    path: "/work",
  },
  {
    element: <Blog />,
    path: "/blog",
  },
  {
    element: <Home />,
    path: "/",
  },
];
