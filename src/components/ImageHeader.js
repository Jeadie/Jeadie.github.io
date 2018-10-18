import React from "react"

class ImageHeader extends React.Component {
    render() {
        return <header className="masthead d-flex" id="">
        <div className="container my-auto">
            <h1 className="mb-1"> Jack Eadie</h1>
            <h3 className="mb-5"></h3>
            <a className="btn btn-primary btn-xl js-scroll-trigger" href="#about">About Me</a>
        </div>
        <div className="overlay"></div>
    </header>
    }
  }

  export default ImageHeader
