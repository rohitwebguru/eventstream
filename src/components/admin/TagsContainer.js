import React, { Component } from 'react'
export default class TagsContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tagslist : []
        };
    }
    render() {
        fetch(
            "https://eventstream-63a1a-default-rtdb.firebaseio.com/tags.json"
        ).then((res) => res.json())
        .then((data) => {
            var results = Object.keys(data).map((key) => [key, data[key]]);
            this.setState({ tagslist : results })
        });
        return (
            <div className='tags_box'>
                <div className="row">
                    <div className="col-sm-6">
                        <h2>Tags</h2>
                    </div>
                    <div className="col-sm-6">
                        <a href="/admin/addtags" className="btn btn-primary float-end">Add</a>
                    </div>
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Name</th>
                                <th scope="col">Date Added</th>
                                <th scope="col">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.tagslist.map((tags,index) => { 
                                    return (
                                    <tr key={index+1}>
                                        <td>{index+1}</td>
                                        <td>{tags[1].name}</td>
                                        <td>{tags[1].dt_added}</td>
                                        <td>
                                            <i className="fa fa-trash"></i>
                                            <a href="/edit"><i className="fa fa-pencil"></i></a>
                                        </td>
                                    </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}
