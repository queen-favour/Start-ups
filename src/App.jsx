import RootLayout from "./layouts/RootLayout";
import Startups from "./pages/Startups/Startups";
import Partners from "./pages/Partners/Partners";
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Exhibitors from "./pages/Exhibitors/Exhibitors";
import Profile from "./pages/Profile/Profile";
import Investors from "./pages/Investors/Investors";

const router = createBrowserRouter([
  {
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <Startups />,
      },
       {
         path: "/investors",
       element: <Investors />,
     },
       {
         path: "/partners",
         element: <Partners />,
       },
       {
        path: "/exhibitors",
         element: <Exhibitors />,
       },
       {
         path: "/profile",
         element: <Profile />,
       },
    ]
  }
]);

function App() {
  return <div className="bg-full-screen font-serif text-white">
    <RouterProvider router={router}/>
  </div>;
}

export default App;
