import React from "react"
import WorkPanel from "./WorkPanel"

class WorkSection extends React.Component {
 
    render() {return <section class="content-section text-center" id="work" style={{"background-color": "#d6e4ff"}} >
        <div class="content-section-heading text-center">
            <h3 class="text-secondary mb-0">Portfolio</h3>
            <h2 class="mb-5">Client-based Projects</h2>
        </div> 
        
        <div class="row">
            <WorkPanel title="Chatloop" colour="#6fa0ff" description="Integrating a chatroom anonymisation service into Chatloop's pilot" btnHref="https://www.chatloop.io/" btnText="Go"/>
            <WorkPanel title="Bookalope" colour="#6fa0ff" description="Using ML to improve manuscript styling" btnHref="https://bookalope.net/" btnText="Go"/>
            <WorkPanel title="GCUH" colour="#6fa0ff" description="Using computer vision to monitor patient malnutrition" btnHref="https://github.com/HealthHackAu2018/eat-me" btnText="Coming Soon"/>
        </div>
        
        </section> 

    }
}

export default WorkSection; 