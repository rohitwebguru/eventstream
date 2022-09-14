import React, { Component } from 'react';
export default class MessageContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            messagetagslist : []
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleSubmit = async (e) => { 
        e.preventDefault();
        const { name } = this.state;
        console.log(name);
        fetch(
            `https://eventstream-63a1a-default-rtdb.firebaseio.com/tags.json?indexOn=${name}&orderBy=date&startAt=50`
        ).then((res) => res.json())
        .then((data) => {
            console.log(data);
            var results = Object.keys(data).map((key) => [key, data[key]]);
            this.setState({ messagetagslist : results })
        });
        //console.log(this.state.messagetagslist);
    }
    render() {
        // fetch(
        //     "https://eventstream-63a1a-default-rtdb.firebaseio.com/tags.json"
        // ).then((res) => res.json())
        // .then((data) => {
        //     var results = Object.keys(data).map((key) => [key, data[key]]);
        //     this.setState({ messagetagslist : results })
        // });
        //console.log(this.state.messagetagslist);
        return (
            <div className='mesages_box'>
                <div className="search_box">
                    <form onSubmit={this.handleSubmit}>
                        <div className="form-group">
                            <i className="fa-solid fa-magnifying-glass"></i>
                            <input type="text" placeholder="Search" value={this.state.name} onChange={(e) => this.setState({ name: e.target.value })}/>
                        </div>
                        
                    </form>
                </div>
                {
                    this.state.messagetagslist.map((tags, index) => { 
                        return (
                            <div className="p-3 mb-2 bg-light bg-gradient text-dark border border-secondary rounded" key={index+1}>#{tags[1].name}<br/> 
                            
                            at {tags[1].dt_added.substr(19, 5)}
                            </div>
                        )
                    })
                }
                <div className='chat-container'>
                    <ul className='chat-box chatContainerScroll'>
                        <li className='chat-left'>
                            <div className='chat-avatar'>
                                <img src="https://www.bootdey.com/img/Content/avatar/avatar3.png" alt="Retail Admin"/>
                                <div className='chat-name'>Hitesh</div>
                            </div>
                            <div className='chat-text theme'>
                                Hello, I'm Hitesh.
                                <br/>
                                How can I help you today?
                                
                            </div>
                            
                        </li>
                        <li className='chat-left'>
                            <div className='chat-avatar'>
                                <img src="https://www.bootdey.com/img/Content/avatar/avatar3.png" alt="Retail Admin"/>
                                <div className='chat-name'>Pratham</div>
                            </div>
                            <div className='chat-text theme2'>
                                Hello, I'm Pratham. 
                                <br/>
                                I need more information about Developer Plan.
                            </div>
                           
                            
                        </li>

                    </ul>
                </div>
            </div>
        )
    }
}
