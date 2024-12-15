import { useState } from "react";
import './App.css'
import EmployeeList from './components/EmployeeList/EmployeeList';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const loginHandler = () => {
    setIsLoggedIn((prevState) => !prevState);
  };

  return (
    <>
    <div>
      <header>
        <Header onClick= {loginHandler} loginStatus={isLoggedIn}/> 
      </header>
      <main>
          <div>
          {isLoggedIn ? <EmployeeList /> : <p>Please log in to see employee list.</p>}
          </div>
      </main>
      <footer>
        <Footer/>
      </footer>  
    </div> 
    </>
  )
};

export default App;





