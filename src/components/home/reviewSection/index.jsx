import React from 'react'
import OwlCarousel from 'react-owl-carousel';  
import 'owl.carousel/dist/assets/owl.carousel.css';  
import 'owl.carousel/dist/assets/owl.theme.default.css';  
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'

function index() {
  return (
    <>
      <div className='container'>
      <h1 className="mb-3" style={{color: "#F52576"}}>Reviews</h1>
      </div>
      <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
      <OwlCarousel items={4}  
          className=""  
          loop   
          autoplay
          autoplayTimeout={1500} >  
          <div >
            <div className='p-2 m-2' style={{ background: "white", border: "1px solid gray", borderRadius: "5px"}}>
              <div className='d-flex align-item-center justify-content-between mb-1'>
                <h5>Jhon Alin</h5>
                <span>
                <FontAwesomeIcon icon={faStar}/>
                <FontAwesomeIcon icon={faStar}/>
                <FontAwesomeIcon icon={faStar}/>
                <FontAwesomeIcon icon={faStar}/>
                <FontAwesomeIcon icon={faStar}/>
                </span>
              </div>
              <h6>Lorem, ipsum dolor.</h6>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. A, ipsam!</p>
            </div>
            <div className='p-2 m-2' style={{ background: "white", border: "1px solid gray", borderRadius: "5px"}}>
              <div className='d-flex align-item-center justify-content-between mb-1'>
                <h5>Jhon Alin</h5>
                <span>
                <FontAwesomeIcon icon={faStar}/>
                <FontAwesomeIcon icon={faStar}/>
                <FontAwesomeIcon icon={faStar}/>
                <FontAwesomeIcon icon={faStar}/>
                <FontAwesomeIcon icon={faStar}/>
                </span>
              </div>
              <h6>Lorem, ipsum dolor.</h6>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatum, temporibus et illo libero eligendi sit nobis minus cupiditate cum modi.</p>
            </div>
          </div>

          <div >
          <div className='p-2 m-2' style={{ background: "white", border: "1px solid gray", borderRadius: "5px"}}>
              <div className='d-flex align-item-center justify-content-between mb-1'>
                <h5>Jhon Alin</h5>
                <span>
                <FontAwesomeIcon icon={faStar}/>
                <FontAwesomeIcon icon={faStar}/>
                <FontAwesomeIcon icon={faStar}/>
                <FontAwesomeIcon icon={faStar}/>
                <FontAwesomeIcon icon={faStar}/>
                </span>
              </div>
              <h6>Lorem, ipsum dolor.</h6>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatum, temporibus et illo libero eligendi sit nobis minus cupiditate cum modi.</p>
            </div>
            <div className='p-2 m-2' style={{ background: "white", border: "1px solid gray", borderRadius: "5px"}}>
              <div className='d-flex align-item-center justify-content-between mb-1'>
                <h5>Jhon Alin</h5>
                <span>
                <FontAwesomeIcon icon={faStar}/>
                <FontAwesomeIcon icon={faStar}/>
                <FontAwesomeIcon icon={faStar}/>
                <FontAwesomeIcon icon={faStar}/>
                <FontAwesomeIcon icon={faStar}/>
                </span>
              </div>
              <h6>Lorem, ipsum dolor.</h6>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. A, ipsam!</p>
            </div>
          </div>

          <div >
            <div className='p-2 m-2' style={{ background: "white", border: "1px solid gray", borderRadius: "5px"}}>
              <div className='d-flex align-item-center justify-content-between mb-1'>
                <h5>Jhon Alin</h5>
                <span>
                <FontAwesomeIcon icon={faStar}/>
                <FontAwesomeIcon icon={faStar}/>
                <FontAwesomeIcon icon={faStar}/>
                <FontAwesomeIcon icon={faStar}/>
                <FontAwesomeIcon icon={faStar}/>
                </span>
              </div>
              <h6>Lorem, ipsum dolor.</h6>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. A, ipsam!</p>
            </div>
            <div className='p-2 m-2' style={{ background: "white", border: "1px solid gray", borderRadius: "5px"}}>
              <div className='d-flex align-item-center justify-content-between mb-1'>
                <h5>Jhon Alin</h5>
                <span>
                <FontAwesomeIcon icon={faStar}/>
                <FontAwesomeIcon icon={faStar}/>
                <FontAwesomeIcon icon={faStar}/>
                <FontAwesomeIcon icon={faStar}/>
                <FontAwesomeIcon icon={faStar}/>
                </span>
              </div>
              <h6>Lorem, ipsum dolor.</h6>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatum, temporibus et illo libero eligendi sit nobis minus cupiditate cum modi.</p>
            </div>
          </div>
          
          <div >
          <div className='p-2 m-2' style={{ background: "white", border: "1px solid gray", borderRadius: "5px"}}>
              <div className='d-flex align-item-center justify-content-between mb-1'>
                <h5>Jhon Alin</h5>
                <span>
                <FontAwesomeIcon icon={faStar}/>
                <FontAwesomeIcon icon={faStar}/>
                <FontAwesomeIcon icon={faStar}/>
                <FontAwesomeIcon icon={faStar}/>
                <FontAwesomeIcon icon={faStar}/>
                </span>
              </div>
              <h6>Lorem, ipsum dolor.</h6>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatum, temporibus et illo libero eligendi sit nobis minus cupiditate cum modi.</p>
            </div>
            <div className='p-2 m-2' style={{ background: "white", border: "1px solid gray", borderRadius: "5px"}}>
              <div className='d-flex align-item-center justify-content-between mb-1'>
                <h5>Jhon Alin</h5>
                <span>
                <FontAwesomeIcon icon={faStar}/>
                <FontAwesomeIcon icon={faStar}/>
                <FontAwesomeIcon icon={faStar}/>
                <FontAwesomeIcon icon={faStar}/>
                <FontAwesomeIcon icon={faStar}/>
                </span>
              </div>
              <h6>Lorem, ipsum dolor.</h6>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. A, ipsam!</p>
            </div>
          </div>

          <div >
            <div className='p-2 m-2' style={{ background: "white", border: "1px solid gray", borderRadius: "5px"}}>
              <div className='d-flex align-item-center justify-content-between mb-1'>
                <h5>Jhon Alin</h5>
                <span>
                <FontAwesomeIcon icon={faStar}/>
                <FontAwesomeIcon icon={faStar}/>
                <FontAwesomeIcon icon={faStar}/>
                <FontAwesomeIcon icon={faStar}/>
                <FontAwesomeIcon icon={faStar}/>
                </span>
              </div>
              <h6>Lorem, ipsum dolor.</h6>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. A, ipsam!</p>
            </div>
            <div className='p-2 m-2' style={{ background: "white", border: "1px solid gray", borderRadius: "5px"}}>
              <div className='d-flex align-item-center justify-content-between mb-1'>
                <h5>Jhon Alin</h5>
                <span>
                <FontAwesomeIcon icon={faStar}/>
                <FontAwesomeIcon icon={faStar}/>
                <FontAwesomeIcon icon={faStar}/>
                <FontAwesomeIcon icon={faStar}/>
                <FontAwesomeIcon icon={faStar}/>
                </span>
              </div>
              <h6>Lorem, ipsum dolor.</h6>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatum, temporibus et illo libero eligendi sit nobis minus cupiditate cum modi.</p>
            </div>
          </div>

          <div >
          <div className='p-2 m-2' style={{ background: "white", border: "1px solid gray", borderRadius: "5px"}}>
              <div className='d-flex align-item-center justify-content-between mb-1'>
                <h5>Jhon Alin</h5>
                <span>
                <FontAwesomeIcon icon={faStar}/>
                <FontAwesomeIcon icon={faStar}/>
                <FontAwesomeIcon icon={faStar}/>
                <FontAwesomeIcon icon={faStar}/>
                <FontAwesomeIcon icon={faStar}/>
                </span>
              </div>
              <h6>Lorem, ipsum dolor.</h6>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatum, temporibus et illo libero eligendi sit nobis minus cupiditate cum modi.</p>
            </div>
            <div className='p-2 m-2' style={{ background: "white", border: "1px solid gray", borderRadius: "5px"}}>
              <div className='d-flex align-item-center justify-content-between mb-1'>
                <h5>Jhon Alin</h5>
                <span>
                <FontAwesomeIcon icon={faStar}/>
                <FontAwesomeIcon icon={faStar}/>
                <FontAwesomeIcon icon={faStar}/>
                <FontAwesomeIcon icon={faStar}/>
                <FontAwesomeIcon icon={faStar}/>
                </span>
              </div>
              <h6>Lorem, ipsum dolor.</h6>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. A, ipsam!</p>
            </div>
          </div>
      </OwlCarousel> 
      </div>
    </>
  )
}

export default index