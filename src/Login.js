import "./loginForm.css"; 
var React = require("react"); 
class Login extends React.Component {
  constructor(props) {
    super(props); 
  } 
  render() {
    return (
      <div className="  h-100">
        {" "}
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

            <form className="form-inline" >
              <div className="md-form my-0">
                <a className="btn btn-outline-info waves-effect" href="#">
                  About Us
                </a>
                <a className="btn btn-outline-info waves-effect" href="/signup">
                  Sign UP
                </a>
                <a
                  className="btn btn-outline-info waves-effect"
                  href="/dashboard"
                >
                  Dashboard
                </a>
              </div>
            </form>
          </div>
        </nav>
        <body>
          <div className="container h-100">
            <div className="row h-100 justify-content-center align-items-center">
              <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
                <div className="card card-signin my-5">
                  <div className="card-body">
                    <h5 className="card-title text-center">Sign In</h5>
                    <form className="form-signin" >
                      <div className="form-label-group">
                        <input
                          type="email"
                          id="inputEmail"
                          className="form-control"
                          placeholder="Email address"  
                        />
                        <label for="inputEmail">Email address</label>
                      </div>

                      <div className="form-label-group">
                        <input
                          type="password"
                          id="inputPassword"
                          className="form-control"
                          placeholder="Password" 

                        />
                        <label for="inputPassword">Password</label>
                      </div>

                      <div className="custom-control custom-checkbox mb-3">
                        <input
                          type="checkbox"
                          className="custom-control-input"
                          id="customCheck1"
                        />
                        <label
                          className="custom-control-label"
                          for="customCheck1"
                        >
                          Remember password
                        </label>
                      </div>
                      <button
                        className="btn btn-lg btn-primary btn-block text-uppercase"
                        type="submit"
                      >
                        Sign in
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </body>
      </div>
    );
  }
}
export default Login;
