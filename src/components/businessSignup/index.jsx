import React from 'react'

function index() {
  return (
    <div className="container mt-5">
         <div className="card"> 
            <div className="row g-0"> 
                <div className="col-md-6"> 
                    <div className="h-100 d-flex justify-content-center align-items-center"> 
                        <div className="py-4 px-3"> 
                        <h4>Signup</h4> 
                        <div className="row g-2 mt-1"> 
                            <div className="col-md-6"> 
                                <div className="input-field"> 
                                    <input className="form-control" id="input1" required/> 
                                    <label>First Name</label> 
                                </div> 
                            </div> 
                            <div className="col-md-6"> 
                                <div className="input-field"> 
                                    <input className="form-control" id="input2" required/> 
                                    <label >Last Name</label> 
                                </div> 
                            </div> 
                        </div> 
                        <div className="row mt-2"> 
                            <div className="col-md-12"> 
                                <div className="input-field"> 
                                    <input className="form-control" id="input3" required/> 
                                    <label>Email</label> 
                                </div> 
                            </div> 
                        </div> 
                        <div className="row mt-2 mb-2"> 
                            <div className="col-md-12"> 
                                <div className="input-field"> 
                                    <input className="form-control" id="input4" required/> 
                                    <label>Password</label> 
                                </div> 
                            </div> 
                        </div> 
                        <span className="text-danger">Password must be atleast 8 characters</span> 
                        <div className="row mt-2"> 
                            <div className="col-md-12"> 
                                <button className="btn btn-primary w-100 signup-button">Signup</button> 
                            </div> 
                        </div> 
                        <div className="member mt-1"> 
                            <span>Already a member?</span> 
                            <a className="text-decoration-none" href="#">Signin</a> 
                        </div> 
                    </div> 
                </div> 
            </div> 
            <div className="col-md-6"> 
                <img src='/public/business2.jpg' style={{width: "100%", height: "100%"}} />
            </div> 
        </div> 
        </div>
    </div>
  )
}

export default index