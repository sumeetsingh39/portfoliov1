import React, { Component } from 'react';
import { Header, Segment, Form, Container, TextArea,Grid, Icon, Button, Message } from 'semantic-ui-react';
import './Contact.css';
import contactImage from '../../assets/undraw_contact_us_15o2.svg';

class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            name :'',
            email : '',
            message :'',
            status:'nothing'
         }
    }
    handleChange = (e, { name, value }) => this.setState({ [name]: value })

    handleSubmit = () => {
      const { name, email, message } = this.state;
      this.setState({status : 'success'});
    }
    handleReset = () =>{
        this.setState({
            name :'',
            email : '',
            message :'',
            status:''

        });

    }
    handleMessage = () =>{

        if(this.state.status == 'failed'){
            return(
                <Message negative>
                    <Message.Header>Sorry, there was an error in sending message</Message.Header>
                </Message>
            )
        }
        else if(this.state.status == 'success'){
            return(
            <Message success>
                <Message.Header>Message sent successfully</Message.Header>
            </Message> )
        }


    }
    render() { 
        return ( 
            <Segment inverted={this.props.darkTheme} raised size="big" className="contact-page">
                <Header>If you want to reach me..</Header>
                <Container textAlign="left">
                    <Form inverted={this.props.darkTheme}>
                            <Form.Input label='Name' placeholder='Name' name="name" onChange={this.handleChange} value={this.state.name}/>
                         <Form.Input label='Email ID' placeholder='Email ID' type="email" name="email" onChange={this.handleChange} value={this.state.email}/>
                        <Form.Field
                            id='form-textarea-control-opinion'
                            control={TextArea}
                            label='Message'
                            placeholder='Message'
                            name="message"
                            value={this.state.message}
                            onChange={this.handleChange}
                            style={{ minHeight: 100, maxHeight: 170 }}
                        />
                            <Button content='Send' className="btn-send" onClick={this.handleSubmit}/>
                            <Button onClick={this.handleReset}>Reset</Button>
                    </Form>
                    {
                        this.handleMessage()
                    }
                    
                    <br/>
                    <br/>
                    <Segment basic>
                        <Grid textAlign="center">  
                        <Grid.Row verticalAlign='middle'>
                        <Grid.Column width="4">
                            <a href="https://www.facebook.com/sumeet.singh.1422/"><Icon name="facebook" color="blue" size="big" link></Icon></a>                            
                        </Grid.Column>
                        <Grid.Column width="4">
                            <a href="https://www.instagram.com/singh.slade/"><Icon name="instagram" color="purple" size="big" link></Icon></a>                            
                        </Grid.Column>
                        <Grid.Column width="4">
                            <a href='https://github.com/sumeetsingh39' color="black"><Icon name="github" size="big" link ></Icon></a>                            
                        </Grid.Column>
                        <Grid.Column width="4">
                            <a href='https://www.linkedin.com/in/sumeet-singh-b33a78114/' color="black"><Icon name="linkedin" size="big" link ></Icon></a>                            
                        </Grid.Column>
                        </Grid.Row>
                        </Grid>
                    </Segment>
                </Container>
            </Segment>
         );
    }
}
 
export default Contact;