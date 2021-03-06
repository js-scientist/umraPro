import { Link } from "react-router-dom";
import animateScrollTo from "animated-scroll-to";
var React = require("react");
var local=false;
class Portfolio extends React.Component {
  constructor(props) {
    super(props);
  } 
  render() {
    return (
      <div>
        <body id="page-top">
          <nav className="navbar navbar-expand-lg navbar-dark   ">
            <a className="navbar-brand btn btn-info  btn-rounded">RealEstate</a>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#basicExampleNav"
              aria-controls="basicExampleNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>

            <div className="collapse navbar-collapse" id="basicExampleNav">
              <ul className="navbar-nav mr-auto" />

              <form className="form-inline">
                <div className="md-form my-0">
                  <a
                    className="btn btn-outline-info waves-effect"
                    onClick={() => {
                      animateScrollTo(document.querySelector("#contact"));
                    }}
                  >
                    Contact Us
                  </a>
                  {local==false &&
                    <a className="btn btn-outline-info waves-effect" href="/login">
                      <i class="fas fa-sign-in-alt"></i>{'  '}  Login
                    </a>}
                    {local==false &&
                      <a className="btn btn-outline-info waves-effect" href="/signup">
                      <i class="fas fa-user-plus"></i>{'  '}Sign UP
                    </a>}
                    {local==false &&
                      <a className="btn btn-outline-info waves-effect" href="/dashboard">
                      Dashboard
                    </a>}
                </div>
              </form>
            </div>
          </nav>
          <div
            id="carousel-example-2"
            className="carousel slide carousel-fade"
            data-ride="carousel"
          >
            <ol className="carousel-indicators">
              <li
                data-target="#carousel-example-2"
                data-slide-to="0"
                className="active"
              />
              <li data-target="#carousel-example-2" data-slide-to="1" />
              <li data-target="#carousel-example-2" data-slide-to="2" />
            </ol>
            <div className="carousel-inner" role="listbox">
              <div className="carousel-item active">
                <div className="view">
                  <img
                    className="d-block w-100"
                    src="https://cdn.wallpapersafari.com/87/30/UmdMzS.jpg"
                    alt="First slide"
                    style={{height:'570px'}}
                  />
                  <div className="mask rgba-black-light" />
                </div>
                <div className="carousel-caption">
                  <h3 className="h3-responsive">Light mask</h3>
                  <p>First text</p>
                </div>
              </div>
              <div className="carousel-item">
                <div className="view">
                  <img
                    className="d-block w-100"
                    src="https://blog.peringenerators.com/wp-content/uploads/2017/05/13.jpg "
                    alt="Second slide"
                    style={{height:'570px'}}

                  />
                  <div className="mask rgba-black-strong" />
                </div>
                <div className="carousel-caption">
                  <h3 className="h3-responsive">Strong mask</h3>
                  <p>Secondary text</p>
                </div>
              </div>
              <div className="carousel-item">
                <div className="view">
                  <img
                    className="d-block w-100"
                    src="https://blog.peringenerators.com/wp-content/uploads/2017/05/13.jpg "
                    alt="Third slide"
                    style={{height:'570px'}}
                  />
                  <div className="mask rgba-black-slight" />
                </div>
                <div className="carousel-caption">
                  <h3 className="h3-responsive">Slight mask</h3>
                  <p>Third text</p>
                </div>
              </div>
            </div>
            <a
              className="carousel-control-prev"
              href="#carousel-example-2"
              role="button"
              data-slide="prev"
            >
              <span className="carousel-control-prev-icon" aria-hidden="true" />
              <span className="sr-only">Previous</span>
            </a>
            <a
              className="carousel-control-next"
              href="#carousel-example-2"
              role="button"
              data-slide="next"
            >
              <span className="carousel-control-next-icon" aria-hidden="true" />
              <span className="sr-only">Next</span>
            </a>
          </div>

          <section className="page-section bg-primary" id="about">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-lg-8 text-center">
                  <h2 className="text-white mt-0">We've got what you need!</h2>
                  <hr className="divider light my-4" />
                  <p className="text-white-50 mb-4">
                    Start Bootstrap has everything you need to get your new
                    website up and running in no time! Choose one of our open
                    source, free to download, and easy to use themes! No strings
                    attached!
                  </p>
                  <a
                    className="btn btn-light btn-xl js-scroll-trigger"
                    href="#services"
                  >
                    Get Started!
                  </a>
                </div>
              </div>
            </div>
          </section>

          <section className="page-section" id="services">
            <div className="container">
              <h2 className="text-center mt-0">At Your Service</h2>
              <hr className="divider my-4" />
              <div className="row">
                <div className="col-lg-3 col-md-6 text-center">
                  <div className="mt-5">
                    <i className="fas fa-4x fa-gem text-primary mb-4" />
                    <h3 className="h4 mb-2">Sturdy Themes</h3>
                    <p className="text-muted mb-0">
                      Our themes are updated regularly to keep them bug free!
                    </p>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 text-center">
                  <div className="mt-5">
                    <i className="fas fa-4x fa-gem text-primary mb-4" />
                    <h3 className="h4 mb-2">Up to Date</h3>
                    <p className="text-muted mb-0">
                      All dependencies are kept current to keep things fresh.
                    </p>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 text-center">
                  <div className="mt-5">
                    <i className="fas fa-4x fa-globe text-primary mb-4" />
                    <h3 className="h4 mb-2">Ready to Publish</h3>
                    <p className="text-muted mb-0">
                      You can use this design as is, or you can make changes!
                    </p>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 text-center">
                  <div className="mt-5">
                    <i className="fas fa-4x fa-heart text-primary mb-4" />
                    <h3 className="h4 mb-2">Made with Love</h3>
                    <p className="text-muted mb-0">
                      Is it really open source if it's not made with love?
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

           
          <section className="page-section bg-dark text-white">
            <div className="container text-center">
              <h2 className="mb-4">Free Download at Start Bootstrap!</h2>
              <a
                className="btn btn-light btn-xl"
                href="https://startbootstrap.com/themes/creative/"
              >
                Download Now!
              </a>
            </div>
          </section>

          <section className="page-section" id="contact">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-lg-8 text-center">
                  <h2 className="mt-0">Let's Get In Touch!</h2>
                  <hr className="divider my-4" />
                  <p className="text-muted mb-5">
                    Ready to start your next project with us? Give us a call or
                    send us an email and we will get back to you as soon as
                    possible!
                  </p>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-4 ml-auto text-center">
                  <i className="fas fa-phone fa-3x mb-3 text-muted" />
                  <div> (202) 555-0149</div>
                </div>
                <div className="col-lg-4 mr-auto text-center">
                  <i className="fas fa-envelope fa-3x mb-3 text-muted" />
                  <a className="d-block" href="mailto:contact@yourwebsite.com">
                    contact@yourwebsite.com
                  </a>
                </div>
              </div>
            </div>
          </section>

          <footer className="bg-light py-5 ">
            <div className="container">
              <div classNameName="small text-center text-muted">
                <a
                  onClick={() => {
                    animateScrollTo(document.querySelector("#page-top"));
                  }}
                >
                  Go To Top <i class="fas fa-arrow-up" />
                </a>
              </div>
            </div>
          </footer>
        </body>
      </div>
    );
  }
}
export default Portfolio;
