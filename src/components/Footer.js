import React from "react"
import SocialMediaCircle from "./SocialMediaCircle"

class Footer extends React.Component {
    render() { return <footer id = "footer" class="footer text-center">
    <div class="container">
      <ul class="list-inline mb-5">
        <SocialMediaCircle icon="icon-social-linkedin" link="https://www.linkedin.com/in/jack-eadie/"/>
        <SocialMediaCircle icon="icon-social-github" link="https://github.com/Jeadie"/>
        <SocialMediaCircle icon="icon-envelope" link="mailto:jack.eadie0@gmail.com?Subject=Hello"/>
      </ul>
    </div>
  </footer>
    }
}

export default Footer