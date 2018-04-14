import React, { Component } from 'react';
import ReactDOM from 'react-dom';


class RepoCarouselItem extends React.Component {
    render() {
        return (<div class="carousel-item fluid active">
                <h1><a href= {props.link}> {props.title}</a></h1>
        </div>)
    }
}

class RepositoryCarouselItems extends React.Component {
    render () {
        return  (<div class="carousel-inner fluid" style="background-color: aliceblue">
                <RepoCarouselItem href = "" title = "First Slide"></RepoCarouselItem>
                <RepoCarouselItem href = "" title = "Second Slide"></RepoCarouselItem>
                <RepoCarouselItem href = "" title = "Third Slide"></RepoCarouselItem>
                <RepoCarouselItem href = "" title = "Fourth Slide"></RepoCarouselItem>;
        </div>)
    }
}

ReactDOM.render(
    <RepositoryCarouselItems/>,
    document.getElementById("trial")
);