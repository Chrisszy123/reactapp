import React, {Component} from 'react';

class Portfolioitem extends Component{
    render(){
        return(
            <div>
                 <div className="col-sm-3">
                <div className="folio-item wow fadeInRightBig" data-wow-duration="1000ms" data-wow-delay="300ms">
                    <div className="folio-image">
                    <img className="img-responsive" src={this.props.backgroundimage} alt=""/>
                    </div>
                    <div className="overlay">
                    <div className="overlay-content">
                        <div className="overlay-text">
                        <div className="folio-info">
                            <h3>{this.props.title}</h3>
                            <p>{this.props.subTitle}</p>
                        </div>
                        <div className="folio-overview">
                            <span className="folio-link"><a className="folio-read-more" href="#" data-single_url="portfolio-single.html" ><i class={this.props.icon1}></i></a></span>
                            <span className="folio-expand"><a href="images/portfolio/portfolio-details.jpg" data-lightbox="portfolio"><i class={this.props.icon2}></i></a></span>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
        )
    }
}
export default Portfolioitem;