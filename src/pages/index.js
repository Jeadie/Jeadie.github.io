import React from "react"
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
export default () => (

    <div>
    <ImageHeader/>
    <AboutPanel/> 
    <SummarySection/>
    <PortfolioSection/>
    <Footer/>
    </div> 
)