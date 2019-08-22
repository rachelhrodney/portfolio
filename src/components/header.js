import React, { Component } from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll'
import Scrollspy from 'react-scrollspy'
import resumeData from '../resumeData';

const navItems = ['home', 'portfolio', 'about']//, 'resume', 'contact']

export default class Header extends Component {

  state = {
    showMobileMenu: false,
  }

  render() {
    const { showMobileMenu } = this.state
    const navClass = showMobileMenu ? 'nav' : 'nav hider'
    return (
      <React.Fragment>
        <header id="home">
          <nav id="nav-wrap">
            <div className="mobile-btn"
              onClick={() => this.setState({ showMobileMenu: !showMobileMenu })}>
            </div>
            <ul id="nav" className={navClass}>
              <Scrollspy items={navItems} currentClassName="current">
                {navItems.map((item, i) => {
                  return <li key={i}><AnchorLink href={`#${item}`}>{capitalize(item)}</AnchorLink></li>
                })}
              </Scrollspy>
            </ul>
          </nav>

          <div className="row banner">
            <div className="banner-text">
              <h1 className="responsive-headline">I'm {resumeData.name}.</h1>
              <h3>
              I like exploring new ideas and places, from designing a human 
              centered disaster simulation to learning about disability in
              South Africa.
              </h3>
            </div>

          </div>

          <p className="scrolldown">
            <AnchorLink href="#about"><i className="icon-down-circle"></i></AnchorLink>
          </p>

        </header>
      </React.Fragment>
    );
  }
}

function capitalize(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}