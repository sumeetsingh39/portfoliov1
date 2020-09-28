import React, { Component } from 'react';
import './App.css';
import Navbar from './components/navbar/Navbar';
import Landing from './components/Landing/Landing';
import About from './components/About/About';
import Portfolio from './components/Portfolio/Portfolio';
import Contact from './components/Contact/Contact';
import ScrollableAnchor,{ configureAnchors } from 'react-scrollable-anchor';



// function App() {
  
//   const testList = [
//     {
//       id: 1,
//       title: 'Success',
//       description: 'This is a success toast component',
//       backgroundColor: '#5cb85c',
//       icon: 'check'
//     },
//     {
//       id: 2,
//       title: 'Danger',
//       description: 'This is an error toast component',
//       backgroundColor: '#d9534f',
//       icon: 'exclamation circle'
//     },
//     {
//       id: 3,
//       title: 'Info',
//       description: 'This is an info toast component',
//       backgroundColor: '#5bc0de',
//       icon: 'info'
//   },
//   {
//       id: 4,
//       title: 'Warning',
//       description: 'This is a warning silly component',
//       backgroundColor: '#f0ad4e',
//       icon: 'warning sign',
//       autoDelete: true,
//       autoDeleteTime: 1000
//   }

// ];

// }

class App extends Component {
  constructor(props) {
    configureAnchors({offset: -60, scrollDuration: 200});
    super(props);
    this.state = { 
      darkTheme: false,
      backgroundColor:'white'
     }
  }
  
  setDarkTheme = () =>{

    if(!this.state.darkTheme){
      this.setState({backgroundColor:'#1b1c1d'})
    }
    else{
      this.setState({backgroundColor:'white'})
    }
    this.setState({darkTheme : !this.state.darkTheme})
    console.log("Dark theme enabled");
  }
  render() {
    const styles = {
      containerStyle: {
        backgroundColor: this.state.backgroundColor,
      }
    };
    const { containerStyle } = styles; 
    return ( 
      <div className="App" style={containerStyle}>
      <Navbar darkMode={this.setDarkTheme} />
      <ScrollableAnchor id={'home'}>
        <Landing darkTheme={this.state.darkTheme}/>
      </ScrollableAnchor>
      <ScrollableAnchor id={'about'}>
        <About darkTheme={this.state.darkTheme}/>
      </ScrollableAnchor>
      <ScrollableAnchor id={'portfolio'}>
        <Portfolio darkTheme={this.state.darkTheme}/>
      </ScrollableAnchor>
      <ScrollableAnchor id={'contact'}>
        <Contact darkTheme={this.state.darkTheme}/>
      </ScrollableAnchor>

    </div>
     );
  }
}
 
export default App;