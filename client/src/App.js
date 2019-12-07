import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { Home } from './pages/Home';
import { LoginPage } from './pages/Login';
import { GalleryPage } from './pages/Gallery';
import { ContactPage } from './pages/ContactPage';
import SliderImage from './Components/Admin/Dashboard/AdminDashboard/SliderImage/SliderImage';
import { Preview } from './Components/Admin/Dashboard/AdminDashboard/Preview/Preview';
import MyContext from './Contaxts/AppContext';
import { Test } from './Components/ReducerTest/test';
import About from './pages/About';
import PortfolioPage from './pages/PortfolioPage';
import GoTop from './Hoc/GoTop';

const PrivateRoute = ({ component: Component, ...rest }, context) => {
  return (
    <Route {...rest} render={(props) => (
      false ?
        <Component {...props} />
        : <Redirect to={{
          pathname: '/login',
          state: { from: props.location }
        }} />
    )} />
  )
}

PrivateRoute.contextType = MyContext;

class App extends Component {
  render() {
    return (
      <Router>
        <GoTop>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path="/portfolio" component={PortfolioPage} />
            <Route exact path='/login' component={LoginPage} />
            <Route exact path="/gallery/:id" component={GalleryPage} />
            <Route exact path="/contact" component={ContactPage} />
            <Route exact path="/test" component={Test} />
            <Route exact path="/preview" component={Preview} />
            <Route exact path="/uploads" component={SliderImage} />
          </Switch>
        </GoTop>
      </Router>
    );
  }
}

export default App;
