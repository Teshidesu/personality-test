import { RouterProvider, createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    lazy: () => import("./pages/index"),
  }
]);

export default function App() {

  return (
    <RouterProvider router={router}/>
  );
}
