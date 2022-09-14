import React, { Component } from 'react'
import Logo from '../images/logo.png'
import { Link } from "react-router-dom";

export default class Leftside extends Component {
  render() {
    return (
        <div className='side_bar'>
            <div className='top_logo'>
                <img src={Logo} alt=""/>
            </div>
            <ul>
                <li className='active'><Link to="/"><i className="fa-solid fa-house"></i></Link></li>
                <li><Link to="/"><i className="fa-solid fa-tag"></i></Link></li>
                <li><Link to="/"><i className="fa-solid fa-message"></i></Link></li>
                <li><Link to="/"><i className="fa-solid fa-gear"></i></Link></li>

            </ul>   
        </div>
    )
  }
}
