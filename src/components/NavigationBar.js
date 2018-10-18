import React from "react"

class NavigationBar extends React.Component {

//  // Closes the sidebar menu
//  $(".menu-toggle").click(function(e) {
//     e.preventDefault();
//     $("#sidebar-wrapper").toggleclassName("active");
//     $(".menu-toggle > .fa-bars, .menu-toggle > .fa-times").toggleclassName("fa-bars fa-times");
//     $(this).toggleclassName("active");
//   });

//   // Closes responsive menu when a scroll trigger link is clicked
//   $('#sidebar-wrapper .js-scroll-trigger').click(function() {
//     $("#sidebar-wrapper").removeclassName("active");
//     $(".menu-toggle").removeclassName("active");
//     $(".menu-toggle > .fa-bars, .menu-toggle > .fa-times").toggleclassName("fa-bars fa-times");
//   });

    constructor(props) {
        super(props);
        this.state = {isToggleOn: true, isActive: false};
    
        // This binding is necessary to make `this` work in the callback
        this.handleClick = this.handleClick.bind(this);
        this.handleCloseClick = this.handleCloseClick.bind(this);
            }

    handleCloseClick(e) {
        this.state.isActive = false; 
    }

    handleClick(e) {
        this.state.isActive = this.state.isActive ? false : true; 
    }

    render() { return <div>
    <a className={"menu-toggle rounded " + (this.state.isActive ? "active" : "")} onBlur={this.handleClick}  onClick={this.handleClick} href="#page-top">
      <i className={"fa " + (this.state.isActive ? "" : "fa-bars fa-times")}> </i>
    </a>
    <nav id="sidebar-wrapper" onClick= {this.handleCloseClick} className = {(this.state.isActive ? "active" : "")}>
      <ul className="sidebar-nav">
        <li className="sidebar-brand">
          <a className="js-scroll-trigger" onClick= {this.handleCloseClick}  href="#page-top">Jack Eadie</a>
        </li>
        <li className="sidebar-nav-item">
          <a className="js-scroll-trigger" onClick= {this.handleCloseClick} href="#">Home</a>
        </li>
        <li className="sidebar-nav-item">
          <a className="js-scroll-trigger" onClick= {this.handleCloseClick} href="#about">About</a>
        </li>
        <li className="sidebar-nav-item">
          <a className="js-scroll-trigger" onClick= {this.handleCloseClick} href="#summary">Summary</a>
        </li>
        <li className="sidebar-nav-item">
          <a className="js-scroll-trigger" onClick= {this.handleCloseClick} href="#portfolio">Portfolio</a>
        </li>
      </ul>
    </nav>
</div> }

}

export default NavigationBar; 