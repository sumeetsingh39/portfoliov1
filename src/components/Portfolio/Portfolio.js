import React, { Component } from 'react';
import { Grid, Header, Segment,Container, Card } from 'semantic-ui-react';
import './Portfolio.css';
import Project from './Project';
import Portfolio_small from '../../assets/Portfolio_small.JPG';
import Yelpcamp_small from '../../assets/Yelpcamp_small.JPG';
import Portfolio_big from '../../assets/Portfolio_full.JPG';
import Yelpcamp_big from '../../assets/Yelpcamp_full.JPG';

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
            }
        ];
        return ( <React.Fragment>
            <Segment inverted={this.props.darkTheme} raised size="big" className="portfolio-page">
                <h1>Some Stuffs I worked on..</h1>
                <Container className="cards-container">
                    <Grid textAlign='center'>
                        <Grid.Row verticalAlign='middle' >
                            <Card.Group>
                                {
                                    projects.map((project) => (
                                            <Project darkTheme={this.props.darkTheme} data={project}/>
                                        
                                    ))
                                }
                            </Card.Group>
                        </Grid.Row>
                    </Grid>
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