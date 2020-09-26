import React, { Component } from 'react';
import {Menu } from 'semantic-ui-react'


class Navbar extends Component {

    render() { 
        return ( 
            <React.Fragment>
                <Menu borderless size="huge" fixed="top">
                <Menu.Item header>Sumeet</Menu.Item>
                    <Menu.Menu position='right'>
                        <Menu.Item>About</Menu.Item>
                        <Menu.Item>Portfolio</Menu.Item>
                        <Menu.Item>Contact</Menu.Item>
                    </Menu.Menu>
                </Menu>
            </React.Fragment>
         );
    }
}
 
export default Navbar;