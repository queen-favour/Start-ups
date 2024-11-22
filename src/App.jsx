import RootLayout from "./layouts/RootLayout";
import Startups from "./pages/Startups/Startups";
import Partners from "./pages/Partners/Partners";
import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";
import { useEffect } from "react";
import Exhibitors from "./pages/Exhibitors/Exhibitors";
import Profile from "./pages/Profile/Profile";
import Investors from "./pages/Investors/Investors";
import Login from "./pages/Login/Login";
import { useAuthStore } from "./store/useAuthStore";
import Home from "./pages/Home/Home";
import Spinner from "./components/Spinner";

function ProtectedRoute({ children }) {
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);
  return isAuthenticated ? children : <Navigate to="/login" replace />;
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    element: (
      <ProtectedRoute>
        <RootLayout />
      </ProtectedRoute>
    ),
    children: [
      { path: "/dashboard", element: <Home /> },
      { path: "/startups", element: <Startups /> },
      { path: "/investors", element: <Investors /> },
      { path: "/partners", element: <Partners /> },
      { path: "/exhibitors", element: <Exhibitors /> },
      { path: "/profile", element: <Profile /> },
    ],
  },
]);

function App() {
  const { checkAuth, isLoading } = useAuthStore();

  useEffect(() => {
    checkAuth();
  }, []);

  if (isLoading) {
    return <Spinner />;
  }
  return (
    <div className="bg-full-screen font-serif text-white">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;