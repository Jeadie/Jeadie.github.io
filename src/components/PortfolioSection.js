   import React from "react"
   import PortfolioRectangle from "./PortfolioRectangle"


   class PortfolioSection extends React.Component {
       render() { return <section class="content-section" id="portfolio">
      <div class="container">
        <div class="content-section-heading text-center">
          <h3 class="text-secondary mb-0">Portfolio</h3>
          <h2 class="mb-5">Open Source Projects</h2>
        </div>
        <div class="row no-gutters">
          {/* Chatroom Anonymisation*/} 
          <PortfolioRectangle title="Chatroom Anonymisation service" description="Contex aware messenger chatroom anonymisation (Coming Soon)." 
            link="https://github.com/Jeadie/" colour="#ffc107"/>
        
          {/* Super Broccoli */}
          <PortfolioRectangle title="Super Broccoli" description="Multivariate regression models with basic serialisation types" 
            link="https://github.com/Jeadie/super-broccoli" colour="#80bdff"/>

          {/* Turbo Robot */}
          <PortfolioRectangle title="Turbo Robot" description="Using decision tree classifiers for automated code generation and other readable formats" 
            link="https://github.com/Jeadie/turbo-robot" colour="#b602ff"/>
    
           {/* Beanti.me */}
           <PortfolioRectangle title="Beanti.me" description="Tanda Hackathon Project 2018: Bringing employees together through coffee" 
            link="https://github.com/Jeadie/beanti.me" colour="#1d809f"/>
    
           {/* Silver Engine */}
           <PortfolioRectangle title="Silver Engine" description="Financial based scripts and web apps based off content learnt in MATH3090 at UQ." 
            link="https://github.com/Jeadie/silver-engine" colour="#6610f2"/>
    
          {/* Winter Research Project */}
          <PortfolioRectangle title="UQ Winter Research Project 2017" description="Mathematical modelling of rho signalling at cell junctions during collective cell migration" 
            link="https://github.com/Jeadie/UQ-Winter-Research-Project-2017" colour="#e83e8c"/>

          {/* Only include in list to have an even amount */}
           {/* NBAnalyser */}
          {/* <div class="col-lg-6">
            <a class="portfolio-item" href="https://github.com/Jeadie/NBAnalyser">
              <span class="caption" style={{"background-color": "#6610f2"}}>
                <span class="caption-content">
                  <h2>NBAnalyser</h2>
                  <p class="mb-0">NBA statistics interface through a Python DB.</p>
                </span>
              </span>
              <svg class="img-fluid" width="530" height="353.58"></svg>

            </a>
          </div> */}

        </div>
      </div>

       </section> }
   }

   export default PortfolioSection; 