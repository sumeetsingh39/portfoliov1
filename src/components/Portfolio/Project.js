import React, { Component } from 'react';
import { Card, Image,Label,Icon } from 'semantic-ui-react';
import './Project.css';

class Project extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        console.log(this.props);
        return ( 
            <Card>
                        <Image src={this.props.data.imageURL} alt="Project Image"/>
                        <Card.Content>
                            <Card.Header>{this.props.data.title}</Card.Header>
                        

                        {
                            this.props.data.tools.map((tool)=>(
                                <Label key={tool} size="medium"><Icon name={tool.toLowerCase()}/>{tool}</Label> 
                            ))
                        }
                        </Card.Content>
            </Card>
         );
    }
}
 
export default Project;