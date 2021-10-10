import "../stylesheet/publicrouting.css"
import Header from "./header";
import MainBody from "./mainBody";
import Login from "./login";
import SignUp from "./signup";
import { Route, Switch } from 'react-router-dom'
const PublicRouting = () => {
    return(
      <div>
          <Header />
          <Switch>
            <Route path="/public/signup" component={SignUp} />
            <Route path="/public/login" component={Login} />
            <Route  path="/" component={MainBody} />
          </Switch>
      </div>
    )
  }
  export default PublicRouting