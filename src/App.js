import { BrowserRouter, Route, Switch } from "react-router-dom"
import Homepage from "./components/Homepage"
import Projects from "./pages/Projects"
import Menu from "./components/menu"
import Error from "./pages/error"
import Contact from "./pages/Contact"
import About from "./pages/about"

const App = () => {
  return (
    <BrowserRouter>
    <Menu/>
      <Switch>
      <Route path="/" exact>
          <Homepage />
        </Route>
        <Route path="/projects">
          <Projects />
        </Route>
        <Route path="/contact-me">
          <Contact />
        </Route>
        <Route path="/about-me">
          <About />
        </Route>
        <Route path="*">
          <Error />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
export default App;