import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Header extends Component{
    render() {
        return (
        <div>
             <header id="home">
            <div id="home-slider" className="carousel slide carousel-fade" data-ride="carousel">
                <div className="carousel-inner">
                    <div className="item active" style={{backgroundImage: `url(${this.props.image})`}}>
                    <div className="caption">
                        <h1 className="animated fadeInLeftBig">{this.props.title} <span>{this.props.mainName}</span></h1>
                        <p className="animated fadeInRightBig">{this.props.subTitle}</p>
                        <a data-scroll className="btn btn-start animated fadeInUpBig" href="#services">{this.props.buttonText}</a>
                    </div>
                    </div>
                    <div className="item" style={{backgroundImage: `url(${this.props.bgImg})`}}>
                    <div className="caption">
                        <h1 className="animated fadeInLeftBig">{this.props.title} <span>{this.props.mainName}</span></h1>
                        <p className="animated fadeInRightBig">{this.props.subTitle2}</p>
                        <a data-scroll className="btn btn-start animated fadeInUpBig" href="#services">{this.props.buttonText}</a>
                    </div>
                    </div>
                    <div className="item" style={{backgroundImage: `url(${this.props.bgImg2})`}}>
                    <div className="caption">
                        <h1 className="animated fadeInLeftBig">{this.props.title}<span>{this.props.mainName}</span></h1>
                        <p className="animated fadeInRightBig">{this.props.subTitle3}</p>
                        <a data-scroll className="btn btn-start animated fadeInUpBig" href="#services">{this.props.buttonText}</a>
                    </div>
                    </div>
                </div>
                <a className="left-control" href="#home-slider" data-slide="prev"><i className="fa fa-angle-left"></i></a>
                <a className="right-control" href="#home-slider" data-slide="next"><i className="fa fa-angle-right"></i></a>

                <a id="tohash" href="#services"><i className="fa fa-angle-down"></i></a>

                </div>
                </header>
        </div>
        )
    }
}

export default Header;