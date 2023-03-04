import React from 'react'

export default function CardItem(props) {
  const cardItemStyle = {
    width: '150px',
    height: '180px',
  }

  const cardItemBodyStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '4px',
    fontSize: '20px'
  }
  return (
    <>
      <div className="card" style={cardItemStyle}>
        <img src={props.image} className="card-img-top" alt={props.altText}/>
          <div className="card-body" style={cardItemBodyStyle}>
            <p>{props.title}</p>
          </div>
      </div>
    </>
  )
}
