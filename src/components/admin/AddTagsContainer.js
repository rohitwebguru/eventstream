import React, { Component } from 'react'
export default class TagsContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
          input: {},
    
          errors: {}
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit = async (e) => { 
        e.preventDefault();
        const { name } = this.state;
        if(this.validate(name)){
            const res = await fetch(
                "https://eventstream-63a1a-default-rtdb.firebaseio.com/tags.json",
                {
                    method: 'POST',
                    headers: {
                        "content-type": "aplication/json",
                    },
                    body: JSON.stringify({
                        name: name,
                        created_by: 1,
                        dt_added: Date().toLocaleString(),
                        dt_updated: Date().toLocaleString(),
                    })
                }
            );
            if(res){
                this.setState({ name:"" });
                alert('Data Stored Successfully');
            }
        }   
    }
    
    validate(name){
        let errors = {};
        let isValid = true;      
        if (!name) {
          isValid = false;
          errors["name"] = "Please enter your name.";
        }      
        this.setState({
          errors: errors
        });
        return isValid;
    }
    render() {
        const { errors } = this.state;
        let name_error_msg = '';
        if (errors.name) {
            name_error_msg = <div className="text-danger">{errors.name}</div>;
        }
        return (
            <div className='tags_box login-page'>
                <div className="row">
                    <div className="col-sm-6">
                        <h2>Tags</h2>
                    </div>
                    <div className="col-sm-6">
                        <a href="/admin/tags" className="btn btn-primary float-end">Back</a>
                    </div>
                    <div className="col-lg-12">
                        <div className="bg-white shadow rounded">
                            <div className="form-left h-100 py-5 px-5">
                                <form className="row g-4" onSubmit={this.handleSubmit}>
                                        <div className="col-12">
                                            <label>Name<span className="text-danger">*</span></label>
                                            <input type="text" name="name" value={this.state.name} onChange={(e) => this.setState({ name: e.target.value })} className="form-control" placeholder="Enter Name" autoComplete='off'/>
                                            {name_error_msg}
                                        </div>
                                        <div className="col-12 mx-auto">
                                            <button type="submit" className="btn btn-primary px-4 mt-4">Submit</button>
                                        </div>
                                </form>
                            </div>  
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
