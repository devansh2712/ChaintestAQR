import React from "react";
import {connect} from "react-redux";
import {saveUserDataLogin} from "../../../redux/actions";
import { ToastContainer, toast } from "react-toastify";
// import 'react-toastify/dist/ReactToastify.css';

class Login extends React.Component {
	constructor() {
		super();
		this.state = {
			email: "",
			password: "",
		};
	}

  handleChange = (event) =>  {
  	this.setState({[event.target.name]: event.target.value});
  }

  handleSubmit = (event) => {
  	event.preventDefault();
  	const data = {...this.state};
  	this.props.saveUserDataLogin(data).then(result => {
  		console.log(result);
  		//toast("Wow so easy !");
  		this.props.history.push("/");
  	}).catch(error => {
  		console.log(error);
  	});
  }

  render() {
  	console.log(this.state);
  	return (
  		<section className="login-form-container">
  			<div className="exchange property-list login-form">
  				<div className="col-lg-12 ">
  					<div className="row">
  						<div className="col-md-12">
  							<div className="shadow-lg bg-white outer_radius border mx-3">
  								<div className="row">
  									<div className="col-lg-12 ">
  										<div className="row header_text px-2 py-2 m-0 text-center d-block">
  											<h5 className="text-center mt-1">LOGIN</h5>
  										</div>
  										<form onSubmit={this.handleSubmit}>
  											<div className="p-5">
  												<div className="row mb-2">
  													<div className="form-group col-md-12">
  														<input
  															type="text"
  															className="form-control"
  															placeholder="Email"
  															name="email"
  															value={this.state.email} onChange={this.handleChange}
  														/>
  													</div>
  													<div className="form-group col-md-12">
  														<input
  															type="text"
  															className="form-control"
  															placeholder="Password"
  															name="password"
  															value={this.state.password} onChange={this.handleChange}
  														/>
  														<a href="#" className="float-right">
                                Forgot Password
  														</a>
  													</div>
  												</div>

  												<div className="row mt-4">
  													<div className="d-flex">
  														<button
  															type="submit"
  															className="btn btn-warning mx-4 px-4"
  														>
                                Login
  														</button>
  													</div>
  												</div>
  											</div>
  										</form>
  									</div>
  								</div>
  							</div>
  						</div>
  					</div>
  				</div>
  			</div>
  		</section>
  	);
  }
}
export default connect(null, {saveUserDataLogin})(Login);
