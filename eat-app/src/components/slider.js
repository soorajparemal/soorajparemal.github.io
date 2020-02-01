import React from 'react';

export default class Slider extends React.Component{
  render(){
    return(
      <div>
      <section className="home-slider owl-carousel img" style={{backgroundImage: 'url(images/bg_1.jpg)'}}>
      <div className="slider-item">
        <div className="overlay"></div>
        <div className="container">
          <div className="row slider-text align-items-center" data-scrollax-parent="true">

            <div className="col-md-6 col-sm-12 ftco-animate">
              <span className="subheading">Delicious</span>
              <h1 className="mb-4">Italian Cuizine</h1>
              <p className="mb-4 mb-md-5">A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
              <p><a href="#" className="btn btn-primary p-3 px-xl-4 py-xl-3">Order Now</a> <a href="#" className="btn btn-white btn-outline-white p-3 px-xl-4 py-xl-3">View Menu</a></p>
            </div>
            <div className="col-md-6 ftco-animate">
              <img src="images/bg_1.png" className="img-fluid" alt="" />
            </div>

          </div>
        </div>
      </div>

      <div className="slider-item">
        <div className="overlay"></div>
        <div className="container">
          <div className="row slider-text align-items-center" data-scrollax-parent="true">

            <div className="col-md-6 col-sm-12 order-md-last ftco-animate">
              <span className="subheading">Crunchy</span>
              <h1 className="mb-4">Italian Pizza</h1>
              <p className="mb-4 mb-md-5">A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
              <p><a href="#" className="btn btn-primary p-3 px-xl-4 py-xl-3">Order Now</a> <a href="#" className="btn btn-white btn-outline-white p-3 px-xl-4 py-xl-3">View Menu</a></p>
            </div>
            <div className="col-md-6 ftco-animate">
              <img src="images/bg_2.png" className="img-fluid" alt="" />
            </div>

          </div>
        </div>
      </div>

      <div className="slider-item" style={{backgroundImage: 'url(images/bg_3.jpg)'}}>
        <div className="overlay"></div>
        <div className="container">
          <div className="row slider-text justify-content-center align-items-center" data-scrollax-parent="true">

            <div className="col-md-7 col-sm-12 text-center ftco-animate">
              <span className="subheading">Welcome</span>
              <h1 className="mb-4">We cooked your desired Pizza Recipe</h1>
              <p className="mb-4 mb-md-5">A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
              <p><a href="#" className="btn btn-primary p-3 px-xl-4 py-xl-3">Order Now</a> <a href="#" className="btn btn-white btn-outline-white p-3 px-xl-4 py-xl-3">View Menu</a></p>
            </div>

          </div>
        </div>
      </div>
    </section>

    <section className="ftco-intro">
      <div className="container-wrap">
        <div className="wrap d-md-flex">
          <div className="info">
            <div className="row no-gutters">
              <div className="col-md-4 d-flex ftco-animate">
                <div className="icon"><span className="icon-phone"></span></div>
                <div className="text">
                  <h3>000 (123) 456 7890</h3>
                  <p>A small river named Duden flows</p>
                </div>
              </div>
              <div className="col-md-4 d-flex ftco-animate">
                <div className="icon"><span className="icon-my_location"></span></div>
                <div className="text">
                  <h3>198 West 21th Street</h3>
                  <p>Suite 721 New York NY 10016</p>
                </div>
              </div>
              <div className="col-md-4 d-flex ftco-animate">
                <div className="icon"><span className="icon-clock-o"></span></div>
                <div className="text">
                  <h3>Open Monday-Friday</h3>
                  <p>8:00am - 9:00pm</p>
                </div>
              </div>
            </div>
          </div>
          <div className="social d-md-flex pl-md-5 p-4 align-items-center">
            <ul className="social-icon">
              <li className="ftco-animate"><a href="#"><span className="icon-twitter"></span></a></li>
              <li className="ftco-animate"><a href="#"><span className="icon-facebook"></span></a></li>
              <li className="ftco-animate"><a href="#"><span className="icon-instagram"></span></a></li>
            </ul>
          </div>
        </div>
      </div>
    </section>
    
    </div>
      )
  }
}