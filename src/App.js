import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./routes/Home";
import Detail from "./routes/Detail";

const router = createBrowserRouter([
    {
        basename: `${process.env.PUBLIC_URL}`,
    },
    {
        path: "/",
        element: <Home />,
    },
    {
        path: "/movie/:id",
        element: <Detail />,
    },
]);
function App() {
    console.log(router);
    return <RouterProvider router={router} />;
}

export default App;
