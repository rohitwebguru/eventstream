import React, { Component } from 'react'
import Search from './Search'
import TextSearchBar from './TextSearchBar'

export default class Container extends Component {
  render() {
    return (
      <>
        <TextSearchBar />

        <Search />
        
      </>
    )
  }
}
