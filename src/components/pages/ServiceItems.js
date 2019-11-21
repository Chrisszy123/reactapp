import React, {Component} from 'react';

class ServiceItems extends Component{
    render(){
        return(
            <div>
                
                    <div className="col-sm-4 wow fadeInDown" data-wow-duration="1000ms" data-wow-delay="300ms">
                        <div className="service-icon">
                        <i className={this.props.icon}></i>
                        </div>
                        <div className="service-info">
                        <h3>{this.props.title}</h3>
                        <p>{this.props.subTitle}</p>
                        </div>
                    </div>
            </div>
        )
    }
}

export default ServiceItems;