import React from 'react'
import Slide from './Slide'
import SlideContent from '../images.json'

export default function SlideShow() {
  return (
    <>
      <div id="carouselExample" className="carousel slide" style={{ width: '95%' }}>
        <div className="carousel-inner">
          {SlideContent.map((element) => {
            return (
              <div className={"carousel-item "+(element.id === 1 ? 'active' : '')} key={element.id}>
                <div className="container">
                  <Slide image={element.imgUrl} title={element.title} content={element.description}/>
                </div>
              </div>
            )
          })}

        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </>
  )
}