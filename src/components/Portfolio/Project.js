import React, { Component } from 'react';
import { Card, Image,Label,Icon,Modal,Header,Button, Grid } from 'semantic-ui-react';
import './Project.css';

class Project extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            open:false
         }
    }
    render() { 
        // console.log(this.props);
        return ( 
            <React.Fragment>
            
            <Modal
            onClose={() => this.setState({open:false})}
            onOpen={() => this.setState({open:true})}
            open={this.state.open}
            dimmer="blurring"
            size="large"
            trigger={<Card color="grey" className='project-cards'>
            <Image type="image/svg+xml" src={this.props.data.imageUrl} alt="Project Image" bordered="none" className="image-portfolio"/>
            <Card.Content>
                <Card.Header>{this.props.data.title}</Card.Header>
            

            {
                this.props.data.tools.map((tool)=>(
                    <Label key={tool} size="medium"><Icon name={tool.toLowerCase()}/>{tool}</Label> 
                ))
            }
            </Card.Content>
            </Card>}
          >
            {/* Modal starts */}
            <Modal.Content image>
                <Grid stackable>
                    <Grid.Column width="8">
                        <Image size='massive' src={this.props.data.bigImageUrl} wrapped />
                    </Grid.Column>
                    <Grid.Column width="8">
                        <Modal.Description>
                        <h1>{this.props.data.title}</h1>
                        <hr></hr>
                        <Header>Skills Used: </Header>{
                        this.props.data.tools.map((tool)=>(
                            <Label color="teal" key={tool} size="medium"><Icon name={tool.toLowerCase()}/>{tool}</Label> 
                        ))
                    }
                        <Header className="desc">{this.props.data.description}</Header>
                        
                        </Modal.Description>
                    </Grid.Column>
                </Grid>
            </Modal.Content>
            <Modal.Actions>
                <Button color={this.props.data.actionColor} href={this.props.data.url}>
                    {this.props.data.action}
                </Button>
            </Modal.Actions>


            </Modal>
            </React.Fragment>
         );
    }
}
 
export default Project;