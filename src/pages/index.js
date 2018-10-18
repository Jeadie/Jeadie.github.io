import React from "react"
import NavigationBar from "../components/NavigationBar"
import ImageHeader from "../components/ImageHeader"
import AboutPanel from "../components/AboutPanel"
import SummarySection from "../components/SummarySection"
import PortfolioSection from "../components/PortfolioSection"
import '../../node_modules/bootstrap/dist/css/bootstrap.css'
import '../../css/stylish-portfolio.css'
import '../../css/stylish-portfolio.min.css'
import "../../vendor/simple-line-icons/css/simple-line-icons.css"
import "../../vendor/font-awesome/css/font-awesome.min.css"

import Footer from "../components/footer";


class HomePage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {showUpButton: false};
    
        // This binding is necessary to make `this` work in the callback
        this.handleButtonFade = this.handleButtonFade.bind(this);
        // this.handleClick = this.handleClick.bind(this);
        // this.handleCloseClick = this.handleCloseClick.bind(this);
            }

    handleButtonFade(e) {
        var scrollDistance = window.scrollY;
        if (scrollDistance > 100) {
            this.state.showUpButton = true; 
        } else {
            this.state.showUpButton = false; 
        };
    }


    render() { return <div>
        <link href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,700,300italic,400italic,700italic" rel="stylesheet" type="text/css">
</link>
    <NavigationBar/> 
    <ImageHeader id="home"/>
    <AboutPanel id="about"/> 
    <SummarySection id="summary"/>
    <PortfolioSection id="portfolio"/>
    <Footer/>
    <a className="scroll-to-top rounded js-scroll-trigger" href="#page-top" style={{"display" : this.state.showUpButton ? "inline" : ""}}>
      <i className="fa fa-angle-up"></i>
    </a>
    </div> 
    }
}

export default HomePage; 