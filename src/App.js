import React, { Component } from 'react';
import './App.css';
import backgroundImg from "./asset 23.jpeg"

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      slideVisible: false,

      menuShow: false
    }
    this.showMenu = this.showMenu.bind(this)
    this.openSlide = this.openSlide.bind(this);

  }

  showMenu() {
    this.setState({
      menuShow: !this.state.menuShow
    })
  }

  openSlide() {
    this.setState({
      slideVisible: !this.state.slideVisible
    })
  }

  render() {
    return (
      <div>
        <div className="body">

          <div className="headerContent">

            <div className="headerTitle">Start Bootstrap</div>

            {/* Hamburger menu only display until 768 px */}
            <button className="headerMenu" onClick={this.openSlide}>MENU

            <div className="hamburger">
                <div className="hamburgerMenu"></div>
                <div className="hamburgerMenu"></div>
                <div className="hamburgerMenu"></div>
              </div>

            </button>





            {/***********************************************/}

            <div className="linkMenu">
              <span className="links">SERVICES</span>
              <span className="links">PORTFOLIO</span>
              <span className="links">ABOUT</span>
              <span className="links">TEAM</span>
              <span className="links">CONTACT</span>

            </div>

          </div>
          <div className={this.state.slideVisible ? 'slide open' : 'slide'}>
            <div className={this.state.slideVisible ? 'linksTestshow' : "linksTest"}>
              <span className="links2">SERVICES</span>
              <span className="links2">PORTFOLIO</span>
              <span className="links2">ABOUT</span>
              <span className="links2">TEAM</span>
              <span className="links2">CONTACT</span>
            </div>

          </div>
          <div className="mainContent">
            <span className="welcome">Welcome To Our Studio!</span>
            <span className="meet">IT'S NICE <br />TO MEET YOU</span>
            <button className="tellMore">TELL ME MORE</button>

          </div>


        </div>
        <div className="placeholder" id="services">Services</div>
        <div className="placeholder" id="portfolio">Portfolio</div>
        <div className="placeholder" id="about">About</div>
        <div className="placeholder" id="team">Team</div>
        <div className="placeholder" id="contact">Contact</div>








      </div>


    );
  }
}

export default App;
