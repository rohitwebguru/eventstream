import React, { Component } from 'react'
import Leftside from '../../components/Leftside'
import Container from '../../components/Container'

export default class Home extends Component {
  render() {
    return (
      	<div className='mainwrap'>
			<div className='left_bar'>
				<Leftside />  
			</div>
			<div className='right_side'>
				<Container />  
			</div>
      	</div>
    )
  }
}
