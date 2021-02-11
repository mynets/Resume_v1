import React, { Component } from 'react';
import Scrollspy from 'react-scrollspy';
import Scroll from './Scroll';
import VisitTest from './VisitCounter/VisitTest'

import avatar from '../assets/images/avatar.png';
import config from '../../config';





export class Sidebar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tabs: [
        { content: 'About', href: 'about' },
        { content: 'Experience', href: 'experience' },
        { content: 'Education', href: 'education' },
        { content: 'Skills', href: 'skills' },
        { content: 'Interests', href: 'interests' },
        { content: 'Awards', href: 'awards' },
      ],
      isCollapsed: true,
      location : "{\"Site\" : \"resume.diquanmoore.com\"}",
      currentCount : ""
       
    };
    this.toggleNavbar = this.toggleNavbar.bind(this);
  }
  async componentDidMount(){
    //request to get and increment current visitor count
    const usersResponse = await fetch('https://hlvv6y74p0.execute-api.us-east-1.amazonaws.com/Beta/visitor',
        {
          method: 'POST',
            body: this.state.location,
            headers : {
                'Accept' : 'application/json',
                
            }
               
        }
        
    );
    
    const usersBody = await usersResponse.json();
    console.log(this.state.location)

    this.setState({currentCount : usersBody.count});
  }

  toggleNavbar() {
    this.setState({
      isCollapsed: !this.state.isCollapsed,
    });
  }

  render() {
    const { tabs, isCollapsed,currentCount } = this.state;
    
    return (
      <nav
        className="navbar navbar-expand-lg navbar-dark bg-primary fixed-top"
        id="sideNav"
      >
        <a className="navbar-brand" href='#about'>
          <span className="d-block d-lg-none">
            {config.firstName} {config.lastName}
          </span>
          <span className="d-none d-lg-block">
            <img
              className="img-fluid img-profile rounded-circle mx-auto mb-2"
              src={avatar}
              alt=""
            />
          </span>
        </a>
        <button
          className={`navbar-toggler navbar-toggler-right ${
            isCollapsed ? 'collapsed' : ''
            }`}
          type="button"
          data-toggle="collapse"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
          onClick={this.toggleNavbar}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={`collapse navbar-collapse ${isCollapsed ? '' : 'show'}`}
          id="navbarSupportedContent">
          <Scrollspy
            items={tabs.map(s => s.href)}
            currentClassName="active"
            offset={-300}
            className="navbar-nav"
          >
            {tabs.map((tab, i) => {
              const { href, content } = tab;
              return (
                <li className="nav-item" key={href}>
                  <Scroll type="id" element={href}>
                    <a className="nav-link" href={`#${href}`}>
                      {content}
                    </a>
                  </Scroll>
                </li>
              );
            })}
            
          </Scrollspy>
        </div>
        
        <VisitTest visitCount = {currentCount} />
        
      </nav>
   );
  }
}

export default Sidebar;
