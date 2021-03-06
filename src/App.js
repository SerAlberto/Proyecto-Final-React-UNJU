import "./App.css";
import { Switch, Route } from "react-router-dom";
import Contacto from "./components/contacto/Contacto";
import Home from "./components/home/Home";
import LandingPage from "./components/landingPage/LandingPage";
import About from "./components/about/About";
import Footer from "./components/home/Footer";
import CardDetail from "./components/cardDetail/CardDetail";
import { useState } from "react";
import Page404 from "./components/page404/Page404";

export default function App() {
  const [mazo, setMazo] = useState([]);
  return (
    <>
      <div className="page-container">
        <div className="content-wrap">
          <Switch>
            <Route exact path="/" component={LandingPage} />
            <Route exact path="/home">
              <Home mazo={mazo} setMazo={setMazo} />
            </Route>
            <Route exact path="/about" component={About} />
            <Route exact path="/contact" component={Contacto} />
            <Route exact path="/cardDetail/:idCarta">
              <CardDetail mazo={mazo} />
            </Route>
            <Route>
              <Page404 />
            </Route>
          </Switch>
        </div>
        <Footer />
      </div>
    </>
  );
}
