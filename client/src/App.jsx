import HomePage from "./routes/homepage/homepage";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ProjectPage from "./routes/projectPage/projectPage";
import Layout from "./routes/layoutPage/layout";
import SinglePage from "./routes/singlePage/singlePage";
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children:[
        {
          path:"/",
          element:<HomePage/>
        },
        {
          path:"/projects",
          element:<ProjectPage/>
        },
        {
          path:"/:id",
          element:<SinglePage/>
        }
      ]
}
  ]);
  
  return(
    <RouterProvider router = {router}/>
  );
}

export default App