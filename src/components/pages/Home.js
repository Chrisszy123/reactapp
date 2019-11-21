import React, {Component} from 'react';
import Header from '../Header';
import image from '../assets/img/bgimage.jpg';
import imagee from '../assets/img/fresh.jpg';
import imageee from '../assets/img/new.jpg';

class Home extends Component{
       
    render(){
        return(
            <div>
              <Header 
                mainName = 'XERO - D'
                title = 'WELCOME TO '
                subTitle = 'Bringing Health Solutions to your Doorstep'
                Showbutton = {true}
                buttonText = 'Sign Up'

                subTitle2 = "Health Solutions you can trust"

                subTitle3 = "24/7 service and customer care"

                image = {image}
                bgImg = {imagee}
                bgImg2 = {imageee}

              />  
            </div>
        )
    }
}
export default Home;