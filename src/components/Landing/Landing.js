import React, { Component } from 'react';
import {Grid,Header, Button,Segment } from 'semantic-ui-react';


class Landing extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( <React.Fragment>
            <Segment>
            <Grid columns={2} stackable textAlign='center'>
            <Grid.Row verticalAlign='middle'>
                <Grid.Column>
                    <Header>Hi, I'm Sumeet Singh</Header>
                    <Button primary>Download Resume</Button>
                </Grid.Column>
                <Grid.Column>
                    
                </Grid.Column>
            </Grid.Row>
            </Grid>
            </Segment>

        </React.Fragment> );
    }
}
 
export default Landing;