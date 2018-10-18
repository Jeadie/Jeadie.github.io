import React from "react"

class SocialMediaCircle extends React.Component {

    render() { return <li class="list-inline-item">
        <span class="service-icon rounded-circle mx-auto mb-3 social-link text-white mr-3" href={this.props.link}>
            <i class={this.props.icon}></i>
        </span>
      </li> 
    }
}

export default SocialMediaCircle;