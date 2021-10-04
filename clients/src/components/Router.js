import App from "../app";
import Login from "./login";
import SignUp from "./signup";
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom'
const Routing = () => {
    return(
      <Router>
        <Switch>
          <Route path="/signup" component={SignUp} />
          <Route path="/login" component={Login} />
          <Route  path="/" component={App} />
        </Switch>
      </Router>
    )
  }
  export default Routing