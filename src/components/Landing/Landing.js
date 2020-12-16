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
            <Segment inverted={this.props.darkTheme} raised size="massive" className="main-page">
            <Grid columns={2} stackable textAlign='center'>
            <Grid.Row verticalAlign='middle' className="l-content">
                <Grid.Column>
                    <Header inverted={this.props.darkTheme}>Hi, I'm Sumeet Singh</Header>
                    {/* <Button icon labelPosition='right' className="btn-download">
                        <Icon name='download' />
                        Download Resume
                    </Button> */}
                    {/* <PDFDownloadLink document={<Resume />} fileName="Sumeet.pdf">
                        {({ blob, url, loading, error }) => (loading ? 'Loading document...' : 'Download now!')}
                    </PDFDownloadLink> */}
                    <Button icon labelPosition='right' className="btn-download" href={require("../../assets/Sumeet\'s Resume.pdf")} download="myFile"><Icon name='download' />Download Resume</Button>
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