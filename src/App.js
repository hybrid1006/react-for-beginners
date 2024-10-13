import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./routes/Home";
import Detail from "./routes/Detail";

const router = createBrowserRouter(
    [
        {
            path: "/",
            element: <Home />,
        },
        {
            path: "/movie/:id",
            element: <Detail />,
        },
    ],
    {
        basename: "/react-for-beginners",
    }
);
function App() {
    console.log(router);
    return <RouterProvider router={router} />;
}

export default App;
