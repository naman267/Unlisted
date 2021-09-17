import React,{Component} from 'react'
import './styles.css'
//import $ from 'jquery'
import '../../node_modules/bootstrap/dist/js/bootstrap.min.js';
import google from './img/google.png'
import logo from './img/logo.png'
class login extends Component
{ componentDidMount()
    { 
        console.log(document.getElementsByTagName('text').innerText)
    }

    render() {

    return(
        <div className="LoginPage">
            <section className="ftco-section">
		<div className="container">
			
			<div className="row justify-content-center">
				<div className="col-md-12 col-lg-10">
					<div className="wrap d-md-flex">
						<div className="left-slider">
							<div className="owl-carousel">
							  <div>
							   <h2>heading goes here</h2> 
							   <p>Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs</p>
							  </div>
							  <div>
							   <h2>heading goes here</h2> 
							   <p>Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs</p>
							  </div><div>
							   <h2>heading goes here</h2> 
							   <p>Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs</p>
							  </div><div>
							   <h2>heading goes here</h2> 
							   <p>Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs</p>
							  </div>
							</div>
			      </div>
						<div className="login-wrap p-4 p-md-5">
			      	<div className="d-flex">
			      		<div className="w-100 logo">
			      			<img src={logo}/>
			      			<h3 className="mb-12">Welcome to <b>Unlisted</b>

			      			</h3>
			      		</div>
								
			      	</div>
							<form action="#" className="signin-form">
			      		<div className="form-group mb-3">
			      			<label className="label" htmlFor="name">Username</label>
			      			<input type="text" className="form-control" placeholder="Username" required/>
			      		</div>
		            <div className="form-group mb-3">
		        	<label className="label" htmlFor="password">Password</label>
		              <input type="password" className="form-control" placeholder="Password" required/>
		            </div>
		            <div className="form-group d-md-flex">
		            	<div className="w-50 text-left">
			            	
									</div>
									<div className="w-50 text-md-right">
										<a href="#">Forgot Password</a>
									</div>
		            </div>
		            <div className="form-group">
		            	<button type="submit" className="form-control btn btn-primary rounded submit px-3">Sign In</button>
		            </div>
		            
		          </form>
		          <div className="or"><span>or</span> </div>
		          <div className="social-login"><a href="#"><img src={google}/>Sign in with Google</a> </div>
		          <p className="create-link"><b>New to Unlisted ?</b> <a data-toggle="tab" href="#signup">Create Account</a></p>
		        </div>
		      </div>
				</div>
			</div>
		</div>
	</section>

	
        </div>
    )
}
    
}
export default login