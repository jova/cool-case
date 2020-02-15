import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

export default class Navbar extends React.Component{

  render(){
    return(
      <nav>
        <ul>
          <Link to="/stream"><li>Stream</li></Link>
          <Link to="/watch"><li>Watch</li></Link>
        </ul>
      </nav>
    );
  }

}