import React from "react"

const boxStyle = {
    // padding: "20px", 
    "textAlign": "center", 
    height:"400", 
    width:"353.58", 

}; 
const innerStyle = {
    "backgroundColour": "#f8f9fa",
    "borderRadius" : "15px",
    // "padding":"20px", 
    "color" : "#17a2b8", 
}

class WorkPanel extends React.Component {
 
    render() {return <div class="col-lg-4" >
                    <a class="portfolio-item" href={this.props.btnHref}>
                    <span class="caption" style={{"background-color": this.props.colour}}>
                        <span class="caption-content">
                        <h2>{this.props.title}</h2>
                        <p class="mb-0">{this.props.description}</p>
                        </span>
                    </span>
                    <svg class="img-fluid" width="350" height="400"></svg>
                    </a>
                </div>
            }
    }


export default WorkPanel; 