import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import { Outlet } from "react-router-dom";

const Root = ({ isLoggedIn, loginHandler }) => {
  return (
    <>
      <Header isLoggedIn={isLoggedIn} loginHandler={loginHandler} />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default Root;
