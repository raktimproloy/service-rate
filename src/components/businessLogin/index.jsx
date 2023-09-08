import React from 'react'
import { Link } from 'react-router-dom'

function index() {
  return (
    <div className="container mt-5">
         <div className="card"> 
            <div className="row g-0"> 
                <div className="col-md-6"> 
                    <div className="h-100 d-flex justify-content-center align-items-center mx-auto" style={{width: "60%"}}> 
                        <div className="py-4 px-3" style={{width: "100%"}}> 
                        <h4>Signin</h4> 
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
                        <div className="row mt-2"> 
                            <div className="col-md-12"> 
                                <button className="btn btn-primary w-100 signup-button">Signup</button> 
                            </div> 
                        </div> 
                        <div className="member mt-1"> 
                            <span>Don't have account? </span> 
                            <Link to={"/business-signup"} className="text-decoration-none">Signup</Link> 
                        </div> 
                    </div> 
                </div> 
            </div> 
            <div className="col-md-6"> 
                <img src='/business1.jpg' style={{width: "100%", height: "100%"}} />
            </div> 
        </div> 
        </div>
    </div>
  )
}

export default index