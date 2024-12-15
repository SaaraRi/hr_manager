import { createBrowserRouter } from "react-router-dom";
import Root from "../pages/Root";
import List from "../pages/List";
import Form from "../pages/Form";
import Login from "../pages/Login";
import ErrorPage from "../pages/ErrorPage";


const createRoutes = (isLoggedIn, loginHandler) => {
    return createBrowserRouter(
      [
        {
          path: "/",
          element: isLoggedIn ? (
            <Root isLoggedIn={isLoggedIn} loginHandler={loginHandler} />
          ) : (
            <Login loginHandler={loginHandler} />
          ),
          errorElement: <ErrorPage />,
          children: [
            { path: "/", element: <List /> },
            { path: "/new", element: <Form /> },
          ],
        },
      ],

    );
  };
  
  export default createRoutes;
  
