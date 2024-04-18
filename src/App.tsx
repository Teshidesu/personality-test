import { RouterProvider, createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    lazy: () => import("./pages/index"),
  },
  {
    path: "/questions",
    lazy: () => import("./pages/questions"),
  }
]);

export default function App() {

  return (
    <RouterProvider router={router}/>
  );
}
