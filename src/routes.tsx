import { createBrowserRouter } from "react-router-dom";

import { Home } from "./pages/home";
import { NotFound } from "./pages/notFound";
import { Login } from "./pages/login";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Home/>
    },
    {
        path: "/login",
        element: <Login/>
    },
    {
        path: "*",
        element: <NotFound/>
    }
]);
