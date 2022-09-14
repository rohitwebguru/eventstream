import React, { Component } from 'react'
import Logo from '../images/logo.png'
export default class Signin extends Component {

	constructor(props) {
		super(props);
		this.handleSubmit = this.handleSubmit.bind(this);
	  }
	
	handleSubmit(event) {
		alert('A name was submitted: ');
		// event.preventDefault();
		this.props.history.push('/Home')
	}
  render() {
    return (
      	<div className='main_wrap'>
		    
			<div className='left_form'>
				<div className='inner_form'>      
					<h1>Sign In</h1>
					<p>Enter your email and password to sign in!</p>
					<form onSubmit={this.handleSubmit}>
						<div className='form_group'>
							<label>Email<span>*</span></label>
							<input type="text" defaultValue="" name="email"  placeholder='mail@simmmple.com' />
						</div>
						<div className='form_group'>
							<label>Password<span>*</span></label>
							<input type="password" defaultValue="" name="password" id="password-field"  placeholder="Min. 8 characters" />
							<div className='show_password'>
								<i toggle="#password-field"  className="far fa-eye" aria-hidden="true"></i>
							</div>
						</div>
						<div className='form_group form_check'>
							<div className='remember'>              
							<input type="checkbox" className="form-check-input" id="exampleCheck1" />
							<label className="form-check-label" htmlFor="exampleCheck1">Keep me logged in</label>
							</div>
							<div className='forgot_pass_link'>
							<a href="forgot-password" role="button">Forgot Password?</a>
							</div>
						</div>
						<div className='form_group'>
						<input type="submit" value="Submit" />
						</div>
					</form>
					<div className='sign_text'>
						<p>Not registered yet? <a href="create-account">Create an Account</a></p>
					</div>
				</div>
				<div className='copyright'>
					<p>© 2022 Horizon UI. All Rights Reserved. Made with love by Simmmple!</p>
				</div>
			</div>

			<div className='right_logo'>
				<div className='logo'>
					<img src={Logo} alt=""/>
				</div>			
				<div className='footer_link'>
					<ul>
						<li><a href="/">Terms of Use</a></li>
						<li><a href="/">Blog</a></li>
					</ul>
				</div>
			</div>
        </div>
    )
  }
}
