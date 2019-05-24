 
var React = require("react"); var local=false;
class Register extends React.Component {  
  render() {
    return (
      <body>
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
    <div class="container">
      <div class="row">
        <div class="col-sm-9 col-md-7 col-lg-5 mx-auto">
          <div class="card card-signin flex-row my-5">
            <div class="card-img-left d-none d-md-flex">
            </div>
            <div class="card-body">
              <h5 class="card-title text-center">Sign UP</h5>
              <form class="form-signin"  >

                <div class="form-label-group">
                  <input type="email" id="inputEmail"  class="form-control"
                   placeholder="Email address" required />
                  <label for="inputEmail">Email address</label>
                </div>

                <hr/>

                <div class="form-label-group">
                  <input type="password" id="inputPassword"
                  class="form-control" placeholder="Password" required />
                  <label for="inputPassword">Password</label>
                </div>

                <div class="form-label-group">
                  <input type="password" id="inputConfirmPassword"
                  class="form-control" placeholder="Password" required />
                  <label for="inputConfirmPassword">Confirm password</label>
                </div>

                <button class="btn btn-lg btn-primary btn-block text-uppercase"
                 type="submit">Sign UP</button>
                <a class="d-block text-center mt-2 small" href="/login">Sign In</a>
                <hr class="my-4"/>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </body>
    );
  }
}
export default Register;
