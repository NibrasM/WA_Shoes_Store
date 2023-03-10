import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home";
import ShoesStore from "./components/Shoes";
import RootLayout from "./components/RootLayout";
import Shoe from "./components/Shoe";
import Offers from "./components/Offers";
const Router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { path: "/", element: <Home /> },
      {
        path: "/shoes",
        element: <ShoesStore />,
      },
      {
        path: "/offers",
        element: <Offers />,
      },
      {
        path: "/shoe/:id",
        element: <Shoe />,
      },
    ],
  },
]);
function App() {
  return (
    <div>
      <RouterProvider router={Router} />
    </div>
  );
}

export default App;
