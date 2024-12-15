import { useState } from "react";
import { RouterProvider } from "react-router-dom";
import createRoutes from "./routes/appRoutes.jsx";
import "./App.css";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const loginHandler = () => {
    setIsLoggedIn((prevState) => !prevState);
  };

  const router = createRoutes(isLoggedIn, loginHandler);

  return (
    <RouterProvider
      router={router}
      future={{
        v7_startTransition: true,
      }}
    />
  );
}

export default App;




