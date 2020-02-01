import React from 'react';

export default class Detail extends React.Component{
	render(){
		return(
			<div>
				<section className="ftco-section ftco-services">
    	<div className="overlay"></div>
    	<div className="container">
    		<div className="row justify-content-center mb-5 pb-3">
          <div className="col-md-7 heading-section ftco-animate text-center">
            <h2 className="mb-4">Our Services</h2>
            <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
          </div>
        </div>
    		<div className="row">
          <div className="col-md-4 ftco-animate">
            <div className="media d-block text-center block-6 services">
              <div className="icon d-flex justify-content-center align-items-center mb-5">
              	<span className="flaticon-diet"></span>
              </div>
              <div className="media-body">
                <h3 className="heading">Healthy Foods</h3>
                <p>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.</p>
              </div>
            </div>      
          </div>
          <div className="col-md-4 ftco-animate">
            <div className="media d-block text-center block-6 services">
              <div className="icon d-flex justify-content-center align-items-center mb-5">
              	<span className="flaticon-bicycle"></span>
              </div>
              <div className="media-body">
                <h3 className="heading">Fastest Delivery</h3>
                <p>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.</p>
              </div>
            </div>      
          </div>
          <div className="col-md-4 ftco-animate">
            <div className="media d-block text-center block-6 services">
              <div className="icon d-flex justify-content-center align-items-center mb-5"><span className="flaticon-pizza-1"></span></div>
              <div className="media-body">
                <h3 className="heading">Original Recipes</h3>
                <p>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.</p>
              </div>
            </div>    
          </div>
        </div>
    	</div>
    </section>

    <section className="ftco-gallery">
    	<div className="container-wrap">
    		<div className="row no-gutters">
					<div className="col-md-3 ftco-animate">
						<a href="gallery.html" className="gallery img d-flex align-items-center" style={{backgroundImage: "url(images/gallery-1.jpg)"}}>
							<div className="icon mb-4 d-flex align-items-center justify-content-center">
    						<span className="icon-search"></span>
    					</div>
						</a>
					</div>
					<div className="col-md-3 ftco-animate">
						<a href="gallery.html" className="gallery img d-flex align-items-center" style={{backgroundImage: "url(images/gallery-2.jpg)"}}>
							<div className="icon mb-4 d-flex align-items-center justify-content-center">
    						<span className="icon-search"></span>
    					</div>
						</a>
					</div>
					<div className="col-md-3 ftco-animate">
						<a href="gallery.html" className="gallery img d-flex align-items-center" style={{backgroundImage: "url(images/gallery-3.jpg)"}}>
							<div className="icon mb-4 d-flex align-items-center justify-content-center">
    						<span className="icon-search"></span>
    					</div>
						</a>
					</div>
					<div className="col-md-3 ftco-animate">
						<a href="gallery.html" className="gallery img d-flex align-items-center" style={{backgroundImage: "url(images/gallery-4.jpg)"}}>
							<div className="icon mb-4 d-flex align-items-center justify-content-center">
    						<span className="icon-search"></span>
    					</div>
						</a>
					</div>
        </div>
    	</div>
    </section>


		<section className="ftco-counter ftco-bg-dark img" id="section-counter" style={{backgroundImage: "url(images/bg_2.jpg)"}} data-stellar-background-ratio="0.5">
			<div className="overlay"></div>
      <div className="container">
        <div className="row justify-content-center">
        	<div className="col-md-10">
        		<div className="row">
		          <div className="col-md-6 col-lg-3 d-flex justify-content-center counter-wrap ftco-animate">
		            <div className="block-18 text-center">
		              <div className="text">
		              	<div className="icon"><span className="flaticon-pizza-1"></span></div>
		              	<strong className="number" data-number="100">0</strong>
		              	<span>Pizza Branches</span>
		              </div>
		            </div>
		          </div>
		          <div className="col-md-6 col-lg-3 d-flex justify-content-center counter-wrap ftco-animate">
		            <div className="block-18 text-center">
		              <div className="text">
		              	<div className="icon"><span className="flaticon-medal"></span></div>
		              	<strong className="number" data-number="85">0</strong>
		              	<span>Number of Awards</span>
		              </div>
		            </div>
		          </div>
		          <div className="col-md-6 col-lg-3 d-flex justify-content-center counter-wrap ftco-animate">
		            <div className="block-18 text-center">
		              <div className="text">
		              	<div className="icon"><span className="flaticon-laugh"></span></div>
		              	<strong className="number" data-number="10567">0</strong>
		              	<span>Happy Customer</span>
		              </div>
		            </div>
		          </div>
		          <div className="col-md-6 col-lg-3 d-flex justify-content-center counter-wrap ftco-animate">
		            <div className="block-18 text-center">
		              <div className="text">
		              	<div className="icon"><span className="flaticon-chef"></span></div>
		              	<strong className="number" data-number="900">0</strong>
		              	<span>Staff</span>
		              </div>
		            </div>
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