import React, { Component } from 'react'
import Leftside from '../../components/Leftside'
import TagsContainer from '../../components/admin/TagsContainer'

export default class Tags extends Component {
  render() {
    return (
      	<div className='mainwrap'>
			<div className='left_bar'>
				<Leftside />  
			</div>
			<div className='right_side'>
				<TagsContainer />  
			</div>
      	</div>
    )
  }
}
