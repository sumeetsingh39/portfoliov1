import React, { Component } from 'react';
import './App.css';
import Navbar from './components/navbar/Navbar';
import Landing from './components/Landing/Landing';
import About from './components/About/About';
import Portfolio from './components/Portfolio/Portfolio';
import Contact from './components/Contact/Contact';
import ScrollableAnchor,{ configureAnchors } from 'react-scrollable-anchor';





class App extends Component {
  constructor(props) {
    configureAnchors({offset: -60, scrollDuration: 200});
    super(props);
    this.state = { 
      darkTheme: false,
      backgroundColor:'white'
     }
  }
  componentWillMount = () =>{
    let darkMode;
    if (localStorage) {
        darkMode = localStorage.getItem("darkMode")
      }
    
      if (darkMode === "true" ) {
        this.setDarkTheme();
      }
}
  setDarkTheme = () =>{

    if(!this.state.darkTheme){
      this.setState({backgroundColor:'#1b1c1d'});
      localStorage.setItem("darkMode", "true");
    }
    else{
      this.setState({backgroundColor:'white'});
      localStorage.setItem("darkMode", "false");
    }
    this.setState({darkTheme : !this.state.darkTheme},()=>{
      console.log("Dark theme enabled",this.state);
    })
    
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
      <Navbar darkMode={this.setDarkTheme} darkTheme={this.state.darkTheme}/>
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