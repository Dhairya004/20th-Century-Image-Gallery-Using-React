import React from 'react'
import BackgroundCard from './BackgroundCard'

export default function CardItem(props) {
  const cardItemStyle = {
    width: '150px',
    height: '180px',
    backgroundColor: 'transparent',
  }

  const cardItemBodyStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '4px',
    fontSize: '20px',
    backgroundColor: 'transparent'
  }
  return (
    <>
      <div className="card mb-3" style={{maxWidth: '70%', maxHeight: '100px'}}>
        <div className="row g-0">
          <div className="col-md-4">
            <img src={props.imagePath} style={{width: '200px', height: '100px'}} className="img-fluid rounded-start" alt={props.altText}/>
          </div>
          <div className="col-md-8">
            <div className="card-body" style={{height: '100%', paddingTop: '5px', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
              <h2 className="card-title">{props.title}</h2>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
