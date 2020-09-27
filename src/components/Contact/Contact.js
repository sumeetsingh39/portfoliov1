import React, { Component } from 'react';
import { Header, Segment, Form, Container, TextArea,Grid, Icon, Button } from 'semantic-ui-react';
import './Contact.css';

class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            name :'',
            email : '',
            message :''
         }
    }
    handleChange = (e, { name, value }) => this.setState({ [name]: value })

    handleSubmit = () => {
      const { name, email, message } = this.state;
      
    }
    handleReset = () =>{
        this.setState({
            name :'',
            email : '',
            message :''
        });
    }
    render() { 
        return ( 
            <Segment raised size="big" className="contact-page">
                <Header>If you want to reach me..</Header>
                <Container textAlign="left">
                    <Form >
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
                            <Button content='Send' color="violet" onClick={this.handleSubmit}/>
                            <Button onClick={this.handleReset}>Reset</Button>
                    </Form>
                    <br/>
                    <br/>
                    <Segment basic>
                        <Grid textAlign="center">  
                        <Grid.Row verticalAlign='middle'>
                        <Grid.Column width="5">
                            <a href="https://www.facebook.com/sumeet.singh.1422/"><Icon name="facebook" color="blue" size="big" link></Icon></a>                            
                        </Grid.Column>
                        <Grid.Column width="5">
                            <a href="https://www.instagram.com/singh.slade/"><Icon name="instagram" color="purple" size="big" link></Icon></a>                            
                        </Grid.Column>
                        <Grid.Column width="5">
                            <a href='https://github.com/sumeetsingh39' color="black"><Icon name="github" size="big" link ></Icon></a>
                            
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