import React from "react"

class AboutPanel extends React.Component {
    render() {
      return <section class="content-section bg-light" id="about">
  <div class="container text-center">
    <div class="row">
      <div class="col-lg-10 mx-auto">
        <h2>About Me</h2>
        <p class="lead mb-5">
          
          I wrote my first Hello World in July of 2016 whilst at university. I'm
          currently studying a Bachelors of Mathematics and a Bachelors of Engineering with honours,
          majoring in Software Engineering. I'm also a Backend Engineer at MaxwellPlus, a healthcare 
          startup using AI to assists clinicians in the diagnosis and prevention of cancer. Through
           my experiences I've really enjoyed building things. I'm always open to new adventures 
           especially open source projects and exciting tech ventures.

        </p>
        <a class="btn btn-dark btn-xl js-scroll-trigger" href="#portfolio">My Open Source Projects</a>
      </div>
    </div>
  </div>
</section>
 }
}

export default AboutPanel