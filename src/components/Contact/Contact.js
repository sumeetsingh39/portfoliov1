import React, { Component } from 'react';
import { Header, Segment, Form, Container, TextArea,Grid, Icon, Button, Message } from 'semantic-ui-react';
import './Contact.css';
import  emailjs,{init} from 'emailjs-com';
import contactImage from '../../assets/undraw_contact_us_15o2.svg';

class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            name :'',
            email : '',
            message :'',
            subject:'',
            status:'nothing'
         }
    }
    handleChange = (e, { name, value }) => this.setState({ [name]: value })

    handleSubmit = (e) => {
        e.preventDefault();
      const { name, subject,email, message } = this.state;
       
    //    init("user_Du03q5Ux63JUpJZFTmGh7");   
       emailjs.sendForm('service_8f4f9vz','template_sfd3ifx', e.target,'user_Du03q5Ux63JUpJZFTmGh7')
       .then((response) => {
          console.log('SUCCESS!', response.status, response.text);
          this.handleReset();
          this.setState({status : 'success'});
       }, (err) => {
          console.log('FAILED...', err);
          this.setState({status : 'failed'});
       });
  
    }
    handleReset = (e) =>{
        this.setState({
            name :'',
            email : '',
            message :'',
            subject:'',
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
                <h1>If you want to reach me..</h1>
                <Container textAlign="left">
                    <Form inverted={this.props.darkTheme} onSubmit={this.handleSubmit}>
                        <Form.Input label='Name' placeholder='Name' name="name" onChange={this.handleChange} value={this.state.name}/>
                        <Form.Input label='Email ID' placeholder='Email ID' type="email" name="email" onChange={this.handleChange} value={this.state.email}/>
                        <Form.Input label='Subject' placeholder='Subject' name="subject" onChange={this.handleChange} value={this.state.subject}/>
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
                            <Button content='Send' type="submit" className="btn-send" size="large"/>
                            <Button type="button" size="large" onClick={this.handleReset}>Reset</Button>
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