import React from 'react';

export default class Footer extends React.Component{
	render(){
		return(
			<div>
			<footer className="ftco-footer ftco-section img">
		    	<div className="overlay"></div>
		      <div className="container">
		        <div className="row mb-5">
		          <div className="col-lg-3 col-md-6 mb-5 mb-md-5">
		            <div className="ftco-footer-widget mb-4">
		              <h2 className="ftco-heading-2">About Us</h2>
		              <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
		              <ul className="ftco-footer-social list-unstyled float-md-left float-lft mt-5">
		                <li className="ftco-animate"><a href="#"><span className="icon-twitter"></span></a></li>
		                <li className="ftco-animate"><a href="#"><span className="icon-facebook"></span></a></li>
		                <li className="ftco-animate"><a href="#"><span className="icon-instagram"></span></a></li>
		              </ul>
		            </div>
		          </div>
		        </div>
		        <div className="row">
		          <div className="col-md-12 text-center">

		  Copyright &copy;<script>document.write(new Date().getFullYear());</script> All rights reserved | This template is made with <i className="icon-heart" aria-hidden="true"></i> by <a href="https://colorlib.com" target="_blank">Colorlib</a>
		          </div>
		        </div>
		      </div>
		    </footer>
		    </div>
		)
	}
}