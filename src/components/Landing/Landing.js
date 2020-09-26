import React, { Component } from 'react';
import {Grid,Header,Image,Icon, Button,Segment } from 'semantic-ui-react';
import coding from '../../assets/undraw_coding_6mjf.svg';
import './Landing.css';


class Landing extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( <React.Fragment>
            <Segment raised size="massive" className="main-page">
            <Grid columns={2} stackable textAlign='center'>
            <Grid.Row verticalAlign='middle' className="l-content">
                <Grid.Column>
                    <Header>Hi, I'm Sumeet Singh</Header>
                    <Button icon labelPosition='right' color="violet">
                        <Icon name='download' />
                        Download Resume
                    </Button>
                </Grid.Column>
                <Grid.Column>
                    <Image src={coding} type="image/svg+xml" alt='coding' size="big"/>
                </Grid.Column>
            </Grid.Row>
            </Grid>
            </Segment>

        </React.Fragment> );
    }
}
 
export default Landing;