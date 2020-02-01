import React from 'react';

export default class Contact extends React.Component{
	render(){
		return(<div>
        <section classname="ftco-appointment">
          <div classname="overlay" />
          <div classname="container-wrap">
            <div classname="row no-gutters d-md-flex align-items-center">
              <div classname="col-md-6 d-flex align-self-stretch">
                <div id="map" />
              </div>
              <div classname="col-md-6 appointment ftco-animate">
                <h3 classname="mb-3">Contact Us</h3>
                <form action="#" classname="appointment-form">
                  <div classname="d-md-flex">
                    <div classname="form-group">
                      <input type="text" classname="form-control" placeholder="First Name" />
                    </div>
                  </div>
                  <div classname="d-me-flex">
                    <div classname="form-group">
                      <input type="text" classname="form-control" placeholder="Last Name" />
                    </div>
                  </div>
                  <div classname="form-group">
                    <textarea name id cols={30} rows={3} classname="form-control" placeholder="Message" defaultValue={""} />
                  </div>
                  <div classname="form-group">
                    <input type="submit" defaultValue="Send" classname="btn btn-primary py-3 px-4" />
                  </div>
                </form>
              </div>    			
            </div>
          </div>
        </section></div>
		)
	}
}