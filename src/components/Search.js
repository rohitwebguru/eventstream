import React, { Component } from 'react'

export default class Search extends Component {
  render() {
    return (
        <div className='search_box'>
            <form>
                <div className='form-group'>
                    <i className="fa-solid fa-magnifying-glass"></i>
                    <input type="text"  defaultValue="" placeholder='Search' />
                </div>
            </form>
        </div>
    )
  }
}
