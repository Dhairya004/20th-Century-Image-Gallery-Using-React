import React from 'react'
import {Link} from 'react-router-dom'
import CardHolder from './CardHolder'

export default function Card(props) {
  const cardStyle = {
    maxWidth: '90%',
    maxHeight: '90%',
    overflow: 'auto'
  }

  return (
    <>
      <div className="card" style={cardStyle}>
        <div className="card-body" style={{textAlign: 'justify'}}>
          {props.title}
          The 20th Century was a period of great change in the world due to several events that happened during this period of time. From two world wars to the creation of the United Nations, from science being used for miracles to being used for holocausts, from freedom struggles to appartheids, the world surely had a lot to witness in the 20th Century.
          {/* <br/>
          <div className="box" style={{display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '50px'}}>
            <button className='btn btn-dark'><Link to='/1900s' style={{textDecoration: 'none', color: 'white', fontSize:'30px'}}>Take me back in time!</Link></button>
          </div> */}
          <CardHolder/>
        </div>
      </div>
    </>
  )
}