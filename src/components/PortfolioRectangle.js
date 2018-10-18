import React from "react"

class PortfolioRectangle extends React.Component {

    
    render() { return <div class="col-lg-6">
          <a class="portfolio-item" href={this.props.link}>
            <span class="caption" style={{"background-color": this.props.colour}}>
              <span class="caption-content">
                <h2>{this.props.title}</h2>
                <p class="mb-0">{this.props.description}</p>
              </span>
            </span>
            <svg class="img-fluid" width="530" height="353.58"></svg>
          </a>
    </div>
    }
}

export default PortfolioRectangle; 
