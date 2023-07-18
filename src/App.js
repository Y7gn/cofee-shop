import "./App.css"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Header from "./components/header/Header"
import Pages from "./pages/Pages"
import Cart from "./pages/Cart"
import Offers from "./pages/offers"
import Contact from "./pages/contact"
import Viewall from "./pages/Viewall"

function App() {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route path='/' exact>
            <Pages  />
          </Route>
          <Route path='/cart' exact>
            <Cart />
          </Route>
          <Route path='/offers' exact>
            <Offers/>
          </Route>
          <Route path='/Contact' exact>
            <Contact/>
          </Route>
          <Route path='/Viewall' exact>
            <Viewall />
          </Route>
        </Switch>
      </Router>
    </>
  )
}
export default App
