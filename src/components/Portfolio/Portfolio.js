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
                description:'',
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
                description:'',
                action:"Not hosted currently",
                actionColor:"red",
                url:''
            }
        ];
        return ( <React.Fragment>
            <Segment inverted={this.props.darkTheme} raised size="big" className="portfolio-page">
                <Header>Some Stuffs I worked on..</Header>
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
            </Segment>
        </React.Fragment> );
    }
}
 
export default Portfolio;