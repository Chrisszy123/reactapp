import React, {Component} from 'react';

// Image imports 
import image from '../assets/img/portfolio/1.jpg';
import image2 from '../assets/img/portfolio/2.jpg';
import image3 from '../assets/img/portfolio/3.jpg';
import image4 from '../assets/img/portfolio/4.jpg';
import image5 from '../assets/img/portfolio/5.jpg';
import image6 from '../assets/img/portfolio/6.jpg';
import image7 from '../assets/img/portfolio/7.jpg';
import image8 from '../assets/img/portfolio/8.jpg';
import image9 from '../assets/img/portfolio/portfolio-details.jpg';

// component imports
import Portfolioitem from '../Portfolioitem';

const  portfolio = [
    {icon1: "fa fa-link", icon2: "fa fa-search-plus", backgroundimage: image, title:"Time Hours", subTitle: "Design, Photography"},
    {icon1: "fa fa-link", icon2: "fa fa-search-plus", backgroundimage: image2, title:"Time Hours", subTitle: "Design, Photography"}, 
    {icon1: "fa fa-link", icon2: "fa fa-search-plus", backgroundimage: image3, title:"Time Hours", subTitle: "Design, Photography"},
    {icon1: "fa fa-link", icon2: "fa fa-search-plus", backgroundimage: image4, title:"Time Hours", subTitle: "Design, Photography"},
    {icon1: "fa fa-link", icon2: "fa fa-search-plus", backgroundimage: image5, title:"Time Hours", subTitle: "Design, Photography"},
    {icon1: "fa fa-link", icon2: "fa fa-search-plus", backgroundimage: image6, title:"Time Hours", subTitle: "Design, Photography"},
    {icon1: "fa fa-link", icon2: "fa fa-search-plus", backgroundimage: image7, title:"Time Hours", subTitle: "Design, Photography"},
    {icon1: "fa fa-link", icon2: "fa fa-search-plus", backgroundimage: image8, title:"Time Hours", subTitle: "Design, Photography"},
    
];

class Portfolio extends Component{
    render(){
        return(
            <div>
                <section id="portfolio">
            <div class="container">
            <div class="row">
                <div class="heading text-center col-sm-8 col-sm-offset-2 wow fadeInUp" data-wow-duration="1000ms" data-wow-delay="300ms">
                <h2>Our Portfolio</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim veniam</p>
                </div>
            </div> 
            </div>
            <div class="container-fluid">
            <div class="row">
               
               {portfolio.map((portfoli, index) =>
                {
                    return <Portfolioitem {...portfoli} key = {index}/>
                }
                )}
                
        
            </div>
            </div>
            <div id="portfolio-single-wrap">
            <div id="portfolio-single">
            </div>
            </div>
        </section>

            </div>
        )
    }
}
export default Portfolio;