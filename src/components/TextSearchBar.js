import React, { Component } from 'react'

export default class TextSearchBar extends Component {
  render() {
    return (
        <div className='top_input_box'>
        <form>
            <div className='border_box'>
                <div className='left_input' >
                <textarea defaultValue=""></textarea>
                </div>
                <div className='right_text'>
                    <i className="fa-solid fa-paperclip"></i>
                    <h2>Attach</h2>
                    <ul>
                        <li>$ - Track finance</li>
                        <li>* - Track Time</li>
                        <li>@ - Tag user</li>
                    </ul>
                </div>
            </div>
            <div>
                <button>Submit</button>
            </div>
        </form>
    </div>
    )
  }
}
