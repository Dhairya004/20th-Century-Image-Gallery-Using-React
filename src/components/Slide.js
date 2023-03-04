import React from 'react'

export default function Slide(props) {
  return (
    <>
      <div className="card mb-3" style={{width: '950px', margin: 'auto'}}>
        <img src={props.image} style={{width: '950px', height: '400px'}} className="card-img-top" alt="..."/>
        <div className="card-body">
          <h5 className="card-title">{props.title}</h5>
          <p className="card-text">{props.content}</p>
        </div>
      </div>
    </>
  )
}
