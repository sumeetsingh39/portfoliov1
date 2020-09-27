import React, { Component } from 'react';
import { Grid, Header, Segment,Container, Card } from 'semantic-ui-react';
import './Portfolio.css';
import Project from './Project';

class Portfolio extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        const projects = [
            {
                imageUrl : '',
                title : 'Portfolio',
                tools : ['React JS','Semantic UI'],
                siteURL : false
            },
            {
                imageUrl : '',
                title : 'YelpCamp',
                tools : ['Express JS','Mongo DB','Bootstrap','Passport JS'],
                siteURL : false
            }
        ];
        return ( <React.Fragment>
            <Segment raised size="big" className="portfolio-page">
                <Header>Some Stuffs I worked on..</Header>
                <Container className="cards-container">
                    <Grid textAlign='center'>
                        <Grid.Row verticalAlign='middle' >
                            <Card.Group>
                                {
                                    projects.map((project) => (
                                            <Project data={project}/>
                                        
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