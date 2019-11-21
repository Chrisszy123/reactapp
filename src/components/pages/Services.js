import React, {Component} from 'react';
import ServiceItems from './ServiceItems';


const services = [
    {icon: 'fa fa-flask', title: 'Brand Identity', subTitle: 'We can help with advertising your brand'},
    {icon: 'fa fa-flask', title: 'Hello', subTitle: 'lorem ipsum dolor'},
    {icon: 'fa fa-flask', title: 'Brand Identity', subTitle: 'We can help with advertising your brand'},
    {icon: 'fa fa-flask', title: 'Brand Identity', subTitle: 'We can help with advertising your brand'},
    {icon: 'fa fa-flask', title: 'Brand Identity', subTitle: 'We can help with advertising your brand'},
    {icon: 'fa fa-flask', title: 'Brand Identity', subTitle: 'We can help with advertising your brand'},
];

class Services extends Component {
    render(){
        return(
            <div> 
            <section id="services">
                <div className="container">
                <div className="heading wow fadeInUp" data-wow-duration="1000ms" data-wow-delay="300ms">
                    <div className="row">
                    <div className="text-center col-sm-8 col-sm-offset-2">
                        <h2>Our Services</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim veniam</p>
                    </div>
                    </div> 
                </div>
                <div className="text-center our-services">
                    <div className="row">
                

                {services.map((service, index) => {
                    return <ServiceItems {...service} key = {index} />
                } )}

                </div>
                </div>
                </div>
            </section>
            </div>
        )
    }
}
export default Services;