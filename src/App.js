import Home from "./components/Home";
import Login from "./components/Login";
import "./App.css";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import { createContext, useEffect, useState } from "react";

export const UserContext = createContext();
export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const value = {
    isLoggedIn: isLoggedIn,
    setIsLoggedIn: setIsLoggedIn,
  };
  {
    /* test */
  }
  const consoleLOG = () => console.log(isLoggedIn);
  {
    /* test */
  }
  return (
    <UserContext.Provider value={value}>
      <BrowserRouter>
        <nav>
          {/* test */}
          <button onClick={consoleLOG}>test</button>
          {/* test */}
          <Link to="/">Home</Link>
          <Link to="/login">Login</Link>
        </nav>
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route exact path="/login" component={Login}></Route>
        </Switch>
      </BrowserRouter>
    </UserContext.Provider>
  );
}
