import React from 'react'

function index() {
  return (
    <div className="container">
        <h1></h1>
        <div className="row">
        <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
            <div className="card border-0 shadow rounded-3 my-5">
            <div className="card-body p-4 p-sm-5">
                <h5 className="card-title text-center mb-5 fw-light fs-5">Sign In</h5>
                <form>
                <div className="form-floating mb-3">
                    <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com"/>
                    <label>Email address</label>
                </div>
                <div className="form-floating mb-3">
                    <input type="password" className="form-control" id="floatingPassword" placeholder="Password"/>
                    <label>Password</label>
                </div>

                <div className="form-check mb-3">
                    <input className="form-check-input" type="checkbox" value="" id="rememberPasswordCheck"/>
                    <label className="form-check-label">
                    Remember password
                    </label>
                </div>
                <div className="d-grid">
                    <button className="btn btn-primary btn-login text-uppercase fw-bold" type="submit">Sign
                    in</button>
                </div>
                <p className='text-center pointer mt-3'>Don't have any account?</p>
                <hr className="my-4"/>
                <div className="d-grid mb-2">
                    <button className="btn btn-dark btn-login text-uppercase fw-bold" type="submit">
                    <i className="fab fa-google me-2"></i> Sign in with Google
                    </button>
                </div>
                <div className="d-grid">
                    <button className="btn btn-dark btn-login text-uppercase fw-bold" type="submit">
                    <i className="fab fa-facebook-f me-2"></i> Sign in with Facebook
                    </button>
                </div>
                </form>
            </div>
            </div>
        </div>
        </div>
    </div>
  )
}

export default index