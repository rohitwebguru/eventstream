import React, { Component } from 'react'
import Leftside from '../../components/Leftside'
import AddTagsContainer from '../../components/admin/AddTagsContainer'

export default class AddTags extends Component {
  render() {
    return (
        <div className='mainwrap'>
			<div className='left_bar'>
				<Leftside />  
			</div>
			<div className='right_side'>
				<AddTagsContainer />  
			</div>
      	</div>
    )
  }
}
