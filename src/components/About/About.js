import React, { Component } from 'react';
import {Segment,Grid,Image,Header,Label,Divider,Icon} from 'semantic-ui-react';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import './About.css';
import designer from '../../assets/undraw_Designer_by46.svg';

class About extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            languages : [
                "C++",
                "C#",
                "HTML5",
                "CSS3",
                "Bootstrap",
                "Semantic UI",
                "JAVA",
                "Javascript",
                "Angular",
                "React",
                "Python",
                "Spring Boot",
                "Django"
            ]
         }
    }
    render() { 
        return ( <React.Fragment>
            <Segment inverted={this.props.darkTheme} raised size="big" className="about-page">  
                <Grid stackable textAlign='center'>
                    <Grid.Row stackable>
                        <Grid.Column width="4">
                            <Image src={designer} type="image/svg+xml" alt='coding' size="medium"/>
                        </Grid.Column>
                        <Grid.Column width="12">
                            <h1>Hello, Nice to meet you </h1>
                            <p>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                            </p>
                        </Grid.Column>
                    </Grid.Row>
                    <Divider/>
                    <Grid.Row>
                        <Grid.Column width="8">
                            <Header inverted={this.props.darkTheme}>A Breif History</Header>
                            <VerticalTimeline className="vertical-timeline vertical-timeline-custom-line">
                                <VerticalTimelineElement
                                    className="vertical-timeline-element--work "
                                    contentStyle={{ background: '#535461', color: '#fff' }}
                                    contentArrowStyle={{ borderRight: '7px solid  #535461' }}
                                    iconStyle={{ background: '#D4D5FE', color: '#535461',paddingTop: '1rem', paddingLeft: '0.2rem' }}
                                    icon={<Icon  name="briefcase" />}
                                >
                                    <h3 className="vertical-timeline-element-title">Project Engineer</h3>
                                    <h4 className="vertical-timeline-element-subtitle">Wipro Ltd.</h4>
                                    <p>
                                    Project Engineer / Web Developer
                                    </p>
                                    <h5>2018-Present</h5>
                                </VerticalTimelineElement>
                                <VerticalTimelineElement
                                    className="vertical-timeline-element--work"
                                    contentStyle={{ background: '#7174fe', color: '#fff' }}
                                    contentArrowStyle={{ borderRight: '7px solid  #7174fe' }}
                                    iconStyle={{ background: '#D4D5FE', color: '#535461' ,paddingTop: '1rem', paddingLeft: '0.2rem'}}
                                    icon={<Icon name="student" />}
                                >
                                    <h3 className="vertical-timeline-element-title">Bachelor of Engg.</h3>
                                    <h4 className="vertical-timeline-element-subtitle">Information Tecnology</h4>
                                    <p>
                                    Government College of Engineering, Karad
                                    </p>
                                    <h5>2014-2018</h5>
                                </VerticalTimelineElement>
                            </VerticalTimeline>
                        </Grid.Column>
                        <Divider vertical/>
                        <Grid.Column width="8">
                            <Header inverted={this.props.darkTheme}>Languages/Frameworks/Libraries</Header>
                            <Label.Group >
                                {this.state.languages.map((language)=>(
                                    <Label key={language} size="huge"><Icon name={language.toLowerCase()}/>{language}</Label> 
                                )                                    
                                )}
                            </Label.Group>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
 
            </Segment>
        </React.Fragment> );
    }
}
 
export default About;