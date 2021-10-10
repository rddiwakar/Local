import "../stylesheet/publicrouting.css"
import Header from "./header";
import MainBody from "./mainBody";
import Login from "./login";
import SignUp from "./signup";
import { Route, Switch } from 'react-router-dom'
const PublicRouting = ({updateUser}) => {
    return(
      <div>
          <Header />
          <Switch>
            <Route path="/public/signup">
              <SignUp updateUser={updateUser} />
            </Route>
            <Route path="/public/login" component={Login} />
            <Route  path="/public" component={MainBody} />
          </Switch>
      </div>
    )
  }
  export default PublicRouting