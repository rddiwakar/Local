import "../stylesheet/publicrouting.css"
import Header from "./header";
import MainBody from "./mainBody";
import Login from "./login";
import SignUp from "./signup";
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom'
const PublicRouting = () => {
    return(
      <div>
        <Router>
          <Header />
          <Switch>
            <Route path="/public/signup" component={SignUp} />
            <Route path="/public/login" component={Login} />
            <Route  path="/" component={MainBody} />
          </Switch>
        </Router>
      </div>
    )
  }
  export default PublicRouting