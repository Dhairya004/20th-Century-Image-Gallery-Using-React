import React from 'react'
import CardItem from './CardItem'

export default function CardHolder() {

  const cardHolderStyle = {
    display: 'flex',
    justifyContent: 'space-evenly'
  }

  return (
    <>
      <div className="container my-4" style={cardHolderStyle}>
        <CardItem image="images/home_images/1900s.jpg" title="The 1900s"/>
        <CardItem image="images/home_images/1900s.jpg" title="The 1900s"/>
        <CardItem image="images/home_images/1900s.jpg" title="The 1900s"/>
        <CardItem image="images/home_images/1900s.jpg" title="The 1900s"/>
        <CardItem image="images/home_images/1900s.jpg" title="The 1900s"/>
      </div>
      {/* <div className="container text-center my-4">
        <div className="row">
          <div className="col-md-4"><CardItem image="images/home_images/1900s.jpg" title="The 1900s"/></div>
        </div>

        <div className="row">
          <div className="col-md-4 offset-md-8"><CardItem image="images/home_images/1900s.jpg" title="The 1900s"/></div>
        </div>

        <div className="row">
          <div className="col-md-4"><CardItem image="images/home_images/1900s.jpg" title="The 1900s"/></div>
        </div>

        <div className="row">
          <div className="col-md-4 offset-md-4"><CardItem image="images/home_images/1900s.jpg" title="The 1900s"/></div>
        </div>

        <div className="row">
          <div className="col-md-4"><CardItem image="images/home_images/1900s.jpg" title="The 1900s"/></div>
        </div>
      </div> */}
    </>
  )
}
