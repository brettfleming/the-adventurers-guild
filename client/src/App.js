import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import userProfile from './pages/userprofile';
import loginPage from './pages/login';
import homePage from './pages/home';


function App() {
  return (
    <Router>
      <>
        <Navbar />
        <Switch>
          <Route exact path='/' component={loginPage} />
          <Route exact path='/home' component={homePage}/>
          <Route exact path='/userprofile' component={userProfile} />
        </Switch>
        <Footer />
      </>
    </Router>
  );
}

export default App;
