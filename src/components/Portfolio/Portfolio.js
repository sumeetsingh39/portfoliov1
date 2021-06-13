import React, { Component } from 'react';
import { Grid, Header, Segment,Container, Card } from 'semantic-ui-react';
import './Portfolio.css';
import Project from './Project';
import Portfolio_small from '../../assets/Portfolio_small.JPG';
import Yelpcamp_small from '../../assets/Yelpcamp_small.JPG';
import Portfolio_big from '../../assets/Portfolio_full.JPG';
import Yelpcamp_big from '../../assets/Yelpcamp_full.JPG';
import Natours_big from '../../assets/natours.JPG';
import Natours_small from '../../assets/natourssm.JPG';
import Covid_big from '../../assets/covid_full.JPG';
import Covid_small from '../../assets/covidsm.JPG';
import TermCon_big from '../../assets/terminalbig.JPG';
import TermCon_small from '../../assets/terminalsmall.JPG';

class Portfolio extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        const projects = [
            {
                imageUrl : Portfolio_small,
                title : 'Portfolio',
                tools : ['React JS','Semantic UI'],
                siteURL : false,
                bigImageUrl: Portfolio_big,
                description:'A single page application created with ReactJS and SemanticUI. It\'s a simple portfolio describing who I am.',
                action:"It's current page",
                actionColor:"green",
                url:''
            },
            {
                imageUrl : Yelpcamp_small,
                title : 'YelpCamp',
                tools : ['Express JS','Mongo DB','Bootstrap','Passport JS'],
                siteURL : false,
                bigImageUrl: Yelpcamp_big,
                description:'It\'s an application where you can view, add, delete campgrounds. If a campground it already present you can review it and add comments. It has been created with ExpressJS as backed and EJS+HTML as front-end. MongoDB is used for database requirements. For authentication PassportJS has been used.',
                action:"Not hosted currently",
                actionColor:"red",
                url:''
            },
            {
                imageUrl : Natours_small,
                title : 'Natours',
                tools : ['HTML','SASS'],
                siteURL : true,
                bigImageUrl: Natours_big,
                description:'A single page application created to showcase SASS usage. A beautiful page for any Natours travel agency;',
                action:"Visit Site",
                actionColor:"green",
                url:'https://sumeetsingh39.github.io/Natours/index.html'
            },
            {
                imageUrl :Covid_small,
                title : 'Covid Tracker',
                tools : ['React','Semantic UI'],
                siteURL : true,
                bigImageUrl: Covid_big,
                description:'A simple Covid-19 tracker for the world. Map and Graph displaying data accordingly',
                action:"Visit Site",
                actionColor:"green",
                url:'https://covid-19-tracker-f57fd.web.app/'
            },
            {
                imageUrl :TermCon_small,
                title : 'Contact and Links Terminal Style',
                tools : ['HTML','CSS','Javascript','Winbox.js'],
                siteURL : true,
                bigImageUrl: TermCon_big,
                description:'A elegant page containg little about me and links in terminal style',
                action:"Visit Site",
                actionColor:"green",
                url:'https://sumeetsingh39.github.io/Terminal_Contact/'
            }
        ];
        return ( <React.Fragment>
            <Segment inverted={this.props.darkTheme} raised size="big" className="portfolio-page">
                <h1>Some Stuffs I worked on..</h1>
                <Container className="cards-container">
                    <div className="container-projects">
                        {
                            projects.map((project) => (
                                    <Project darkTheme={this.props.darkTheme} data={project}/>
                                
                            ))
                        }
                    </div>
                </Container>
                <br/><br/><br/>
                <hr className="hr-text"/>
                <span id="quote">Quality is more important than quantity. One home run is much better than two doubles.</span>
                <hr className="hr-text"/>
            </Segment>
        </React.Fragment> );
    }
}
 
export default Portfolio;