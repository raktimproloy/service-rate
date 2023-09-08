import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faArrowRight, faPiggyBank, faHandshakeSimple, faCannabis, faPersonRunning, faShoePrints, faTree } from '@fortawesome/free-solid-svg-icons'

{/* <i class="fa-solid fa-person-running"></i> */}

function Index() {
    const [carouselNum, setCarouselNum] = useState(1)
  return (
<section className="pt-5 pb-5">
    <div className="container">
        <div className="row">
          <div className='d-flex justify-content-between'>
            <div className="">
                <h1 className="mb-3" style={{color: "#F52576"}}>Explore Catagory</h1>
            </div>
          </div>
            <div className='col-1 d-flex align-items-center'>
                <p className={`btn mb-3 mr-1 ${carouselNum === 1 && "d-none"}`} role="button" data-slide="prev" style={{background: "#3ABFF8", color: "black", borderRadius: "50%"}} onClick={() => setCarouselNum(1)}>
                    <FontAwesomeIcon icon={faArrowLeft}/>
                </p>
            </div>
            <div className="col-10">
                <div id="carouselExampleIndicators2" className="carousel slide" data-ride="carousel">

                    <div className="carousel-inner">
                        <div className={`carousel-item ${carouselNum === 1 && "active"}`}>
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
                                        <FontAwesomeIcon icon={faHandshakeSimple} style={{width:"30px", height:"30px", marginRight: "20px"}}/>
                                        <h4 className='p-0 m-0'>Lorem ipsum dolor sit.</h4>
                                    </div>
                                    <div className='d-flex align-items-center p-3 mb-3 border' style={{background: "white", borderRadius: "10px", cursor: "pointer"}}>
                                        <FontAwesomeIcon icon={faHandshakeSimple} style={{width:"30px", height:"30px", marginRight: "20px"}}/>
                                        <h4 className='p-0 m-0'>Lorem ipsum dolor sit.</h4>
                                    </div>
                                    <div className='d-flex align-items-center p-3 mb-3 border' style={{background: "white", borderRadius: "10px", cursor: "pointer"}}>
                                        <FontAwesomeIcon icon={faHandshakeSimple} style={{width:"30px", height:"30px", marginRight: "20px"}}/>
                                        <h4 className='p-0 m-0'>Lorem ipsum dolor sit.</h4>
                                    </div>
                                </div>
                                <div className="col-md-4 mb-3">
                                    <div className='d-flex align-items-center p-3 mb-3 border' style={{background: "white", borderRadius: "10px", cursor: "pointer"}}>
                                        <FontAwesomeIcon icon={faCannabis} style={{width:"30px", height:"30px", marginRight: "20px"}}/>
                                        <h4 className='p-0 m-0'>dolor sit amet.</h4>
                                    </div>
                                    <div className='d-flex align-items-center p-3 mb-3 border' style={{background: "white", borderRadius: "10px", cursor: "pointer"}}>
                                        <FontAwesomeIcon icon={faCannabis} style={{width:"30px", height:"30px", marginRight: "20px"}}/>
                                        <h4 className='p-0 m-0'>dolor sit amet</h4>
                                    </div>
                                    <div className='d-flex align-items-center p-3 mb-3 border' style={{background: "white", borderRadius: "10px", cursor: "pointer"}}>
                                        <FontAwesomeIcon icon={faCannabis} style={{width:"30px", height:"30px", marginRight: "20px"}}/>
                                        <h4 className='p-0 m-0'>dolor sit amet</h4>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div className={`carousel-item ${carouselNum === 2 && "active"}`}>
                            <div className="row">

                                <div className="col-md-4 mb-3">
                                    <div className='d-flex align-items-center p-3 mb-3 border' style={{background: "white", borderRadius: "10px", cursor: "pointer"}}>
                                        <FontAwesomeIcon icon={faPersonRunning} style={{width:"30px", height:"30px", marginRight: "20px"}}/>
                                        <h4 className='p-0 m-0'>Sit amet consectetur.</h4>
                                    </div>
                                    <div className='d-flex align-items-center p-3 mb-3 border' style={{background: "white", borderRadius: "10px", cursor: "pointer"}}>
                                        <FontAwesomeIcon icon={faPersonRunning} style={{width:"30px", height:"30px", marginRight: "20px"}}/>
                                        <h4 className='p-0 m-0'>Sit amet consectetur.</h4>
                                    </div>
                                    <div className='d-flex align-items-center p-3 mb-3 border' style={{background: "white", borderRadius: "10px", cursor: "pointer"}}>
                                        <FontAwesomeIcon icon={faPersonRunning} style={{width:"30px", height:"30px", marginRight: "20px"}}/>
                                        <h4 className='p-0 m-0'>Sit amet consectetur.</h4>
                                    </div>
                                </div>
                                <div className="col-md-4 mb-3">
                                    <div className='d-flex align-items-center p-3 mb-3 border' style={{background: "white", borderRadius: "10px", cursor: "pointer"}}>
                                        <FontAwesomeIcon icon={faShoePrints} style={{width:"30px", height:"30px", marginRight: "20px"}}/>
                                        <h4 className='p-0 m-0'>Lorem, ipsum dolor.</h4>
                                    </div>
                                    <div className='d-flex align-items-center p-3 mb-3 border' style={{background: "white", borderRadius: "10px", cursor: "pointer"}}>
                                        <FontAwesomeIcon icon={faShoePrints} style={{width:"30px", height:"30px", marginRight: "20px"}}/>
                                        <h4 className='p-0 m-0'>Lorem, ipsum dolor.</h4>
                                    </div>
                                    <div className='d-flex align-items-center p-3 mb-3 border' style={{background: "white", borderRadius: "10px", cursor: "pointer"}}>
                                        <FontAwesomeIcon icon={faShoePrints} style={{width:"30px", height:"30px", marginRight: "20px"}}/>
                                        <h4 className='p-0 m-0'>Lorem, ipsum dolor.</h4>
                                    </div>
                                </div>
                                <div className="col-md-4 mb-3">
                                    <div className='d-flex align-items-center p-3 mb-3 border' style={{background: "white", borderRadius: "10px", cursor: "pointer"}}>
                                        <FontAwesomeIcon icon={faTree} style={{width:"30px", height:"30px", marginRight: "20px"}}/>
                                        <h4 className='p-0 m-0'>Lorem ipsum dolor sit.</h4>
                                    </div>
                                    <div className='d-flex align-items-center p-3 mb-3 border' style={{background: "white", borderRadius: "10px", cursor: "pointer"}}>
                                        <FontAwesomeIcon icon={faTree} style={{width:"30px", height:"30px", marginRight: "20px"}}/>
                                        <h4 className='p-0 m-0'>Lorem ipsum dolor sit.</h4>
                                    </div>
                                    <div className='d-flex align-items-center p-3 mb-3 border' style={{background: "white", borderRadius: "10px", cursor: "pointer"}}>
                                        <FontAwesomeIcon icon={faTree} style={{width:"30px", height:"30px", marginRight: "20px"}}/>
                                        <h4 className='p-0 m-0'>Lorem ipsum dolor sit.</h4>
                                    </div>
                                </div>

                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
            <div className='col-1 d-flex align-items-center'>
                <p className={`btn mb-3 mr-1 ${carouselNum === 2 && "d-none"}`} role="button" data-slide="next" style={{background: "#3ABFF8", color: "black", borderRadius: "50%"}} onClick={() => setCarouselNum(2)}>
                    <FontAwesomeIcon icon={faArrowRight}/>
                </p>
            </div>
        </div>
    </div>
</section>
  )
}

export default Index