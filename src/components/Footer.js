import React from "react"

class Footer extends React.Component {
    render() { return <footer id = "footer" class="footer text-center">
    <div class="container">
      <ul class="list-inline mb-5">
        <li class="list-inline-item">
          <a class="social-link rounded-circle text-white mr-3" href="https://www.linkedin.com/in/jack-eadie/">
            <i class="icon-social-linkedin"></i>
          </a>
        </li>
        <li class="list-inline-item">
          <a class="social-link rounded-circle text-white mr-3" href="https://github.com/Jeadie">
            <i class="icon-social-github"></i>
          </a>
        </li>
        <li class="list-inline-item">
          <a class="social-link rounded-circle text-white" href="mailto:jack.eadie0@gmail.com?Subject=Hello">
            <i class="icon-envelope"></i>
          </a>
        </li>
      </ul>
      <p class="text-muted small mb-0">With thanks to <a href="https://startbootstrap.com/">Start Bootstrap</a> for the help.</p>
    </div>
  </footer>
    }
}

export default Footer