import "./App.css";
import Home from "./Components/Home/Home";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import About from "./Components/About/About";
import Footer from "./Components/Footer/Footer";
import Error from "./Components/Error/Error";
import Services from "./Components/Services/Services";
import Navbar from "./Components/Navbar/Navbar";
import Trainer from "./Components/Trainer/Trainer";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar></Navbar>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route exact path="/home">
            <Home></Home>
          </Route>
          <Route exact path="/services">
          <Services></Services>
          </Route>
          <Route exact path="/course">
            <Trainer></Trainer>
          </Route>
          <Route exact path="/about">
            <About></About>
          </Route>
          <Route path="*">
            <Error></Error>
          </Route>
        </Switch>
        <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
