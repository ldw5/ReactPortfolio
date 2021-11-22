import { BrowserRouter, Route, Switch } from "react-router-dom"
import Homepage from "./components/Homepage"
import Projects from "./pages/Projects"
//import Error from "./pages/error"

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
      <Route path="/" exact>
          <Homepage />
        </Route>
        <Route path="/projects">
          <Projects />
        </Route>
        
      </Switch>
    </BrowserRouter>
  );
}
export default App;