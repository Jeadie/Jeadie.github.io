import React from "react"

class ImageHeader extends React.Component {
    render() {
        return <header class="masthead d-flex">
        <div class="container my-auto">
            <h1 class="mb-1"> Jack Eadie</h1>
            <h3 class="mb-5"></h3>
            <a class="btn btn-primary btn-xl js-scroll-trigger" href="#about">About Me</a>
        </div>
        <div class="overlay"></div>
    </header>
    }
  }

  export default ImageHeader
