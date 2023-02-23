import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./components/Home";
import ShoesStore from "./components/Shoes";
import RootLayout from "./components/RootLayout";
const Router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { path: "/", element: <HomePage /> },
      {
        path: "/shoes",
        element: <ShoesStore />,
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
