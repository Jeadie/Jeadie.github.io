   import React from "react"

   class PortfolioSection extends React.Component {
       render() { return <section class="content-section" id="portfolio">
      <div class="container">
        <div class="content-section-heading text-center">
          <h3 class="text-secondary mb-0">Portfolio</h3>
          <h2 class="mb-5">Recent Open Source Projects</h2>
        </div>
        <div class="row no-gutters">
          {/* Super Broccoli */}
          <div class="col-lg-6">
            <a class="portfolio-item" href="https://github.com/Jeadie/super-broccoli">
              <span class="caption" style={{"background-color": "#80bdff"}}>
                <span class="caption-content">
                  <h2>Super Broccoli</h2>
                  <p class="mb-0">Multivariate regression models with basic serialisation types</p>
                </span>
              </span>
              <svg class="img-fluid" width="530" height="353.58"></svg>
            </a>
          </div>

          {/* Turbo Robot */}
          <div class="col-lg-6">
            <a class="portfolio-item" href="https://github.com/Jeadie/turbo-robot">
              <span class="caption" style={{"background-color": "#b602ff"}}>
                <span class="caption-content">
                  <h2>Turbo Robot</h2>
                  <p class="mb-0">Using decision tree classifiers for automated code generation and other readable formats</p>
                </span>
              </span>
              <svg class="img-fluid" width="530" height="353.58"></svg>
            </a>
          </div>

           {/* Beanti.me */}
          <div class="col-lg-6">
            <a class="portfolio-item" href="https://github.com/Jeadie/beanti.me">
              <span class="caption" style={{"background-color" : "#1d809f"}}>
                <span class="caption-content">
                  <h2>Beanti.me</h2>
                  <p class="mb-0">Tanda Hackathon Project 2018: Bringing employees together through coffee</p>
                </span>
              </span>
              <svg class="img-fluid" width="530" height="353.58"></svg>

            </a>
          </div>

          {/* Silver Engine */}
          <div class="col-lg-6">
            <a class="portfolio-item" href="https://github.com/Jeadie/silver-engine">
              <span class="caption" style={{"background-color": "#ffc107"}}>
                <span class="caption-content">
                  <h2>Silver Engine</h2>
                  <p class="mb-0">Financial based scripts and web apps based off content learnt in MATH3090 at UQ.</p>
                </span>
              </span>
              <svg class="img-fluid" width="530" height="353.58"></svg>
            </a>
          </div>

          {/* Winter Research Project */}
          <div class="col-lg-6">
            <a class="portfolio-item" href="https://github.com/Jeadie/UQ-Winter-Research-Project-2017">
              <span class="caption" style={{"background-color":  "#e83e8c"}}>
                <span class="caption-content">
                  <h2>UQ Winter Research Project 2017</h2>
                  <p class="mb-0">Mathematical modelling of rho signalling at cell junctions during collective cell migration</p>
                </span>
              </span>
              <svg class="img-fluid" width="530" height="353.58"></svg>

            </a>
          </div>

          {/* Only include in list to have an even amount */}
           {/* NBAnalyser */}
          <div class="col-lg-6">
            <a class="portfolio-item" href="https://github.com/Jeadie/NBAnalyser">
              <span class="caption" style={{"background-color": "#6610f2"}}>
                <span class="caption-content">
                  <h2>NBAnalyser</h2>
                  <p class="mb-0">NBA statistics interface through a Python DB.</p>
                </span>
              </span>
              <svg class="img-fluid" width="530" height="353.58"></svg>

            </a>
          </div>

        </div>
      </div>

       </section> }
   }

   export default PortfolioSection; 