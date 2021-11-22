import { BrowserRouter, Route, Switch } from "react-router-dom"
import Homepage from "./components/Homepage";
import Projects from "./pages/Projects";

const App = () => {
  return (
    <BrowserRouter>
      <Route path="/">
        <Homepage />
      </Route>
      <Route path="/projects">
        <Projects />
      </Route>
    </BrowserRouter>
  );
}
export default App;