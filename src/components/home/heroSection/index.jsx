import React from 'react'

function index() {
  return (
    <div className='py-5'>
        <div className='container'>
            <div className='row d-flex align-items-center'>
                <div className='col-md-6'>
                    <h3>Discover the Power of Transparent Experience</h3>
                    <h3 style={{color: "#F52576", fontWeight: "blod"}}>Where Honest Opinions Shape Better Choices.</h3>
                    <div className="input-group my-4">
                        <input type="text" className="form-control py-2" placeholder="Search..." aria-label="Recipient's username" aria-describedby="button-addon2"/>
                        <button className="btn btn-outline-secondary" style={{background: "#3ABFF8", color: "black"}} type="button" id="button-addon2">Search</button>
                    </div>
                </div>
                <div className='col-md-6'>
                    <img src="/hero.jpeg" alt="" style={{ width: "100%"}} />
                </div>
            </div>
        </div>
    </div>
  )
}

export default index