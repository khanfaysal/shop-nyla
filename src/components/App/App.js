import { useEffect, useState } from "react";
// redux
import { connect } from "react-redux";
//react route dom
import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";
import {
  authPrivateLoading,
  authUserSuccess
} from "../../redux/actions/userActions";
import About from "../About/About";
import Cart from "../Cart/Cart";
//components
import Contact from "../Contact/Contact";
import Home from "../Home/Home";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import ScrollToTop from "../ScrollToTop/ScrollToTop";
import Navbar from "../SharedComponents/Navbar/Navbar";
import Shop from "../Shop/Shop";
//authentication
import { auth, setUser } from "../SignIn/authManager";
import SignIn from "../SignIn/SignIn";
import "./App.scss";

function App({ setLoggedInUser, setPrivateLoading }) {

  const [isCalled, setIsCalled] = useState(false);
  
  useEffect(() => {
    if (!isCalled) {
      const unsubscribe = auth.onAuthStateChanged(user => {
        if (user) {
          setLoggedInUser(setUser(user));
          setPrivateLoading();
          setIsCalled(true);
        } else {
          setPrivateLoading();
          setIsCalled(true);
        }
      });
      return unsubscribe;
    }
  }, [setLoggedInUser, setPrivateLoading, isCalled]);

  return (
    <div className='App'>
      <Router>
        <ScrollToTop />
        <Navbar />
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route path='/login'>
            <SignIn />
          </Route>
          <Route path='/about'>
            <About />
          </Route>
          <PrivateRoute path='/about'>
            <Contact />
          </PrivateRoute>
          <PrivateRoute path='/contact'>
            <Contact />
          </PrivateRoute>
          <PrivateRoute path='/shop'>
            <Shop />
          </PrivateRoute>
          <Route path='/about'>
            <About />
          </Route>
          <Route path='/cart'>
            <Cart />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    setLoggedInUser: (user) =>
      dispatch(authUserSuccess(user)),
    setPrivateLoading: () => dispatch(authPrivateLoading()),
  };
};

export default connect(null, mapDispatchToProps)(App);
