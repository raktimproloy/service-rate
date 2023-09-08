import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faArrowRight, faPiggyBank } from '@fortawesome/free-solid-svg-icons'

function index() {
  return (
<section className="pt-5 pb-5">
    <div className="container">
        <div className="row">
          <div className='d-flex justify-content-between'>
            <div className="">
                <h1 className="mb-3" style={{color: "#F52576"}}>Explore Catagory</h1>
            </div>
            <div className="">
                <a className="btn mb-3 mr-1" href="#carouselExampleIndicators2" role="button" data-slide="prev" style={{background: "black", color: "white"}}>
                    <FontAwesomeIcon icon={faArrowLeft}/>
                </a>
                <a className="btn mb-3 ms-4 " href="#carouselExampleIndicators2" role="button" data-slide="next" style={{background: "black", color: "white"}}>
                    <FontAwesomeIcon icon={faArrowRight}/>
                </a>
            </div>
          </div>
            <div className="col-12">
                <div id="carouselExampleIndicators2" className="carousel slide" data-ride="carousel">

                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <div className="row">

                                <div className="col-md-4 mb-3">
                                    <div className='d-flex align-items-center p-3 mb-3 border' style={{background: "white", borderRadius: "10px", cursor: "pointer"}}>
                                        <FontAwesomeIcon icon={faPiggyBank} style={{width:"30px", height:"30px", marginRight: "20px"}}/>
                                        <h4 className='p-0 m-0'>Lorem, ipsum dolor.</h4>
                                    </div>
                                    <div className='d-flex align-items-center p-3 mb-3 border' style={{background: "white", borderRadius: "10px", cursor: "pointer"}}>
                                        <FontAwesomeIcon icon={faPiggyBank} style={{width:"30px", height:"30px", marginRight: "20px"}}/>
                                        <h4 className='p-0 m-0'>Lorem, ipsum dolor.</h4>
                                    </div>
                                    <div className='d-flex align-items-center p-3 mb-3 border' style={{background: "white", borderRadius: "10px", cursor: "pointer"}}>
                                        <FontAwesomeIcon icon={faPiggyBank} style={{width:"30px", height:"30px", marginRight: "20px"}}/>
                                        <h4 className='p-0 m-0'>Lorem, ipsum dolor.</h4>
                                    </div>
                                </div>
                                <div className="col-md-4 mb-3">
                                    <div className='d-flex align-items-center p-3 mb-3 border' style={{background: "white", borderRadius: "10px", cursor: "pointer"}}>
                                        <FontAwesomeIcon icon={faPiggyBank} style={{width:"30px", height:"30px", marginRight: "20px"}}/>
                                        <h4 className='p-0 m-0'>Lorem, ipsum dolor.</h4>
                                    </div>
                                    <div className='d-flex align-items-center p-3 mb-3 border' style={{background: "white", borderRadius: "10px", cursor: "pointer"}}>
                                        <FontAwesomeIcon icon={faPiggyBank} style={{width:"30px", height:"30px", marginRight: "20px"}}/>
                                        <h4 className='p-0 m-0'>Lorem, ipsum dolor.</h4>
                                    </div>
                                    <div className='d-flex align-items-center p-3 mb-3 border' style={{background: "white", borderRadius: "10px", cursor: "pointer"}}>
                                        <FontAwesomeIcon icon={faPiggyBank} style={{width:"30px", height:"30px", marginRight: "20px"}}/>
                                        <h4 className='p-0 m-0'>Lorem, ipsum dolor.</h4>
                                    </div>
                                </div>
                                <div className="col-md-4 mb-3">
                                    <div className='d-flex align-items-center p-3 mb-3 border' style={{background: "white", borderRadius: "10px", cursor: "pointer"}}>
                                        <FontAwesomeIcon icon={faPiggyBank} style={{width:"30px", height:"30px", marginRight: "20px"}}/>
                                        <h4 className='p-0 m-0'>Lorem, ipsum dolor.</h4>
                                    </div>
                                    <div className='d-flex align-items-center p-3 mb-3 border' style={{background: "white", borderRadius: "10px", cursor: "pointer"}}>
                                        <FontAwesomeIcon icon={faPiggyBank} style={{width:"30px", height:"30px", marginRight: "20px"}}/>
                                        <h4 className='p-0 m-0'>Lorem, ipsum dolor.</h4>
                                    </div>
                                    <div className='d-flex align-items-center p-3 mb-3 border' style={{background: "white", borderRadius: "10px", cursor: "pointer"}}>
                                        <FontAwesomeIcon icon={faPiggyBank} style={{width:"30px", height:"30px", marginRight: "20px"}}/>
                                        <h4 className='p-0 m-0'>Lorem, ipsum dolor.</h4>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div className="carousel-item">
                            <div className="row">

                                <div className="col-md-4 mb-3">
                                    <div className="card">
                                        <img className="img-fluid" alt="100%x280" src="https://images.unsplash.com/photo-1532771098148-525cefe10c23?ixlib=rb-0.3.5&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=1080&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjMyMDc0fQ&amp;s=3f317c1f7a16116dec454fbc267dd8e4"/>
                                        <div className="card-body">
                                            <h4 className="card-title">Special title treatment</h4>
                                            <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>

                                        </div>

                                    </div>
                                </div>
                                <div className="col-md-4 mb-3">
                                    <div className="card">
                                        <img className="img-fluid" alt="100%x280" src="https://images.unsplash.com/photo-1532715088550-62f09305f765?ixlib=rb-0.3.5&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=1080&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjMyMDc0fQ&amp;s=ebadb044b374504ef8e81bdec4d0e840"/>
                                        <div className="card-body">
                                            <h4 className="card-title">Special title treatment</h4>
                                            <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>

                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4 mb-3">
                                    <div className="card">
                                        <img className="img-fluid" alt="100%x280" src="https://images.unsplash.com/photo-1506197603052-3cc9c3a201bd?ixlib=rb-0.3.5&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=1080&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjMyMDc0fQ&amp;s=0754ab085804ae8a3b562548e6b4aa2e"/>
                                        <div className="card-body">
                                            <h4 className="card-title">Special title treatment</h4>
                                            <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>

                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
  )
}

export default index