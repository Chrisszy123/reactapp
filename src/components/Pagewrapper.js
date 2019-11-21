import React, {Component} from 'react';
import Home from './pages/Home';
import Services from './pages/Services';
import {Link} from 'react-router-dom';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';


class Pagewrapper extends Component {
    render(){
        return (
            <div>
                <Home/>

                <div className="main-nav">
                <div className="container">
                    <div className="navbar-header">
                    <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                        <span className="sr-only">Toggle navigation</span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                    </button>
                    <Link className="navbar-brand" to="index.html">
                        <h1><img className="img-responsive" src="images/logo.png" alt="logo"/></h1>
                    </Link>                    
                    </div>
                    <div className="collapse navbar-collapse">
                    <ul className="nav navbar-nav navbar-right">                 
                        <li className="scroll active"><Link to="#home">Home</Link></li>
                        <li className="scroll"><Link to="#services">Service</Link></li> 
                        <li className="scroll"><Link to="#about-us">About Us</Link></li>                     
                        <li className="scroll"><Link to="#portfolio">Portfolio</Link></li>
                        <li className="scroll"><Link to="#team">Team</Link></li>
                        <li className="scroll"><Link to="#blog">Blog</Link></li>
                        <li className="scroll"><Link to="contact">Contact</Link></li>       
                    </ul>
                    </div>
                </div>
                </div>

              <Services />

              <Portfolio />
              <Contact />
            </div>
        )
    }
}
export default Pagewrapper;