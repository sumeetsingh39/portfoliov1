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
        console.log(this.props);
        return ( 
            <React.Fragment>
                <div className="project-container">
                    <div className="project-inner">
                        <div className="text-part">
                        <Header inverted={this.props.darkTheme}>{this.props.data.title}</Header>
                        <p>{this.props.data.description}</p>
                        
                        </div>
                        <div className="image-part">
                            <Image src={this.props.data.bigImageUrl} size="big"/>
                        </div>
                    </div>
                    <div className="project-outer">
                        
                        <div className="skills">
                        Skills Used:
                        <br/>
                        {
                            this.props.data.tools.map(tool=>(<span>{tool}</span>))
                        }
                        </div>
                        <div className="linking">
                            {this.props.data.siteURL?<a href={this.props.data.url}>{this.props.data.action}</a>:<span>{this.props.data.action}</span>}
                            
                        </div>
                        
                    </div>
                    
                </div>
            </React.Fragment>
         );
    }
}
 
export default Project;