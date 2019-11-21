import React, {Component}from 'react';
import './App.css';
import Pagewrapper from './components/Pagewrapper';
import {Route, Link, BrowserRouter as Router} from 'react-router-dom';
import Home from './components/pages/Home';
import Services from './components/pages/Services';
import Contact from './components/pages/Contact';


class App extends Component{
    render(){
      return(
        <div>
         <Router>
          <Pagewrapper>
            
                <Route 
                  exact = {true}
                  path = "/"
                  Component = {Home}
                />
                <Route
                path = "/contact"
                render={() => {
                  return(
                    <Contact />
                  )
                }}
                />
                
            
          </Pagewrapper>
            </Router>>
        </div>
      )
    }
}


export default App;
