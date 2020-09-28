import React, { Component } from 'react';
import {Menu,Image, Icon } from 'semantic-ui-react';
import logo from '../../assets/s.svg';
class Navbar extends Component {
    constructor(props){
        super(props);
        this.state = {
            darkMode:false
        }
    }
    componentWillMount = () =>{
        if(this.props.darkTheme){

        }
    }
    darkTheme = () =>{
        if(this.state.darkMode == true){
            return(
                <Menu.Item onClick={ this.handleClick}><Icon name="sun" /></Menu.Item>
            )
        }
        else{
            return(
                <Menu.Item onClick={this.handleClick}><Icon name="moon" /></Menu.Item>
            )
        }
    }
    handleClick = () =>{
        this.setState({darkMode : !this.state.darkMode});
        this.props.darkMode();
    }
    render() { 
        return ( 
            <React.Fragment>
                <Menu inverted={this.state.darkMode} borderless size="huge" fixed="top">
                <Menu.Item header href={'#home'}><Image src={logo} type="image/svg+xml" alt='coding' size="mini"/></Menu.Item>
                    <Menu.Menu position='right'>
                        <Menu.Item href={`#about`}>About</Menu.Item>
                        <Menu.Item href={'#portfolio'}> Portfolio</Menu.Item>
                        <Menu.Item href={'#contact'}>Contact</Menu.Item>
                        {this.darkTheme()}
                    </Menu.Menu>
                </Menu>
            </React.Fragment>
         );
    }
}
 
export default Navbar;