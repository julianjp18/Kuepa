import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './App.css';
import Software from './components/Software';
import School from './components/School';
import English from './components/English';

function App() {
  return (
    <div>
      <Router>
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
          <Link to={"/"}><img className="img img-responsive" src="http://www.kuepa.com/img/kuepastrap/brandlogo@2x.png" alt="img logo"/></Link>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <a className="nav-link" href="#"> <span className="sr-only">(current)</span></a>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"/bachillerato"}>Bachillerato</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"/ingles"}>Inglés</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"/software"}>Téc. desarrollo de software</Link>
              </li>
            </ul>
            <div className="my-2 my-lg-0 text-right">
              <span className="navbar-text">
                Avatar
              </span>
            </div>
          </div>
        </nav>

        <div className="container container-display">
          <div className="row">
            <div className="col-md-12">
              <Switch>
                  <Route exact path='/' component={ Software } />
                  <Route exact path='/bachillerato' component={ School } />
                  <Route exact path='/ingles' component={ English } />
                  <Route exact path='/software' component={ Software } />
              </Switch>
            </div>
          </div>
        </div>
      </Router>
        <footer class="footer mt-auto py-3 bg-dark">
          <div class="container">
            <div className="row">
              <div className="col-md-6">
                <img className="img img-responsive img-footer" src="http://www.kuepa.com/img/kuepastrap/brandlogo@2x.png" alt="img logo"/>
              </div>
              <div className="col-md-6">
                <p class="text-right copy-text">Copyright 2020.</p>
              </div>
            </div>
          </div>
        </footer>
    </div>
    
  );
}
export default App;
