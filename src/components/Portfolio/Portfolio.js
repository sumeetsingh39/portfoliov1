import React, { Component } from 'react';
import { Header } from 'semantic-ui-react';

class Portfolio extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( <React.Fragment>
            <Header>
                Portfolio
            </Header>
        </React.Fragment> );
    }
}
 
export default Portfolio;