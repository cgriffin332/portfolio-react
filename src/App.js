import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import About from "./components/About/About";
import Portfolio from "./components/Portfolio/Portfolio";
import Contact from "./components/Contact/Contact";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route
            exact
            path="/portfolio"
            className="active"
            component={Portfolio}
          />
          <Route exact path="/contact" className="active" component={Contact} />
          <Route path="/" className="active" component={About} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
