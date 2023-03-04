import React from 'react'
import {Link} from 'react-router-dom'

export default function Card(props) {
  const cardStyle = {
    maxWidth: '90%',
    maxHeight: '90%'
  }
  return (
    <>
      <div className="card" style={cardStyle}>
        <div className="card-body" style={{textAlign: 'justify'}}>
          {props.title}
          The 20th Century was a period of great changes in the world due to several events that happened during this period of time. From two world wars to the creation of the united nations, from science being used for miracles to it being used for holocausts, from freedom struggles to appartheids, the world surely had a lot to witness in the 20th Century.
          <br/>
          <div className="box" style={{display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '50px'}}>
            <button className='btn btn-dark'><Link to='/gallery' style={{textDecoration: 'none', color: 'white', fontSize:'30px'}}>Take me back in time!</Link></button>
          </div>
        </div>
      </div>
    </>
  )
}