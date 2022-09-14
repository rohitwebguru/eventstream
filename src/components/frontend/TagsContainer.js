import React, { Component } from 'react'
export default class TagsContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            frontendtagslist : []
        };
    }
    render() {
        //let TagList;
        fetch(
            'https://eventstream-63a1a-default-rtdb.firebaseio.com/tags.json',
        ).then((res) => res.json())
        .then((data) => {
            var results = Object.keys(data).map((key) => [key, data[key]]);
            this.setState({ frontendtagslist : results })
        });
        return (
            <div className='tags_box'>
                <div className='search_box'>
                    <form>
                        <div className='form-group'>
                            <i className="fa-solid fa-magnifying-glass"></i>
                            <input type="text"  defaultValue="" placeholder='Search' />
                        </div>
                    </form>
                </div>
                {
                    this.state.frontendtagslist.map((tags, index) => { 
                        return (
                            <div className="p-3 mb-2 bg-light bg-gradient text-dark border border-secondary rounded" key={index+1}>#{tags[1].name}</div>
                        )
                    })
                }
            </div>
        )
    }
}
