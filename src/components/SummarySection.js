import React from "react"

class SummarySection extends React.Component {
    render() {
      return <section class="content-section bg-primary text-white text-center" id="summary">
  <div class="container">
    <div class="content-section-heading">
      <h3 class="text-secondary mb-0">Timeline</h3>
      <h2 class="mb-5">Summary</h2>
    </div>
    <div class="row">
      <div class="col-lg-3 col-md-6 mb-5 mb-lg-0">
        <span class="service-icon rounded-circle mx-auto mb-3">
          <i class="icon-graduation"></i>
        </span>
        <h4>
          <strong>Study</strong>
        </h4>
        <p class="text-faded mb-0">Enrolled at UQ: February 2016</p>
      </div>
      <div class="col-lg-3 col-md-6 mb-5 mb-lg-0">
        <span class="service-icon rounded-circle mx-auto mb-3">
          <i class="icon-bulb"></i>
        </span>
        <h4>
          <strong>Hello World</strong>
        </h4>
        <p class="text-faded mb-0">First touched code: July 2016</p>
      </div>

      <div class="col-lg-3 col-md-6 mb-5 mb-md-0">
        <span class="service-icon rounded-circle mx-auto mb-3">
          <i class="icon-briefcase"> </i>
        </span>
        <h4>
          <strong>Work</strong>
        </h4>
        <p class="text-faded mb-0">Started work at MaxwellPlus: April 2018</p>
      </div>

      <div class="col-lg-3 col-md-6">
        <span class="service-icon rounded-circle mx-auto mb-3">
          <a href="./CV.pdf"><i class="icon-cloud-download"></i></a>
        </span>
        <h4>
          <strong>More?</strong>
        </h4>
        <p class="text-faded mb-0">Have a look at my <a href="./CV.pdf"><u style={{"color": "rgba(255, 255, 255, 0.7)"}}>CV</u></a></p>
      </div>

    </div>
  </div>
</section>
    }
}

export default SummarySection