import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Landing from "./Component/Layouts/Landing";
import Auth from "./View/Auth";
import AuthContextProvider from "./contexts/AuthContext";
import Dashboard from "./View/Dashboard";
import ProjectedRoute from "./Component/Routing/ProjectedRoute";
import About from "./View/About";
import PostContextProvider from "./contexts/PostContext";

function App() {
  return (
    <AuthContextProvider>
      <PostContextProvider>
        <Router>
          <Switch>
            <Route exact path="/" component={Landing} />
            <Route
              exact
              path="/login"
              render={(props) => <Auth {...props} authRoute="login" />}
            />
            <Route
              exact
              path="/register"
              render={(props) => <Auth {...props} authRoute="register" />}
            />
            <ProjectedRoute exact path="/dashboard" component={Dashboard} />
            <ProjectedRoute exact path="/about" component={About} />
          </Switch>
        </Router>
      </PostContextProvider>
    </AuthContextProvider>
  );
}

export default App;
