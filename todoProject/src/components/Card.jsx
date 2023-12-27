import React from 'react'

function Card({heading,details,date,time}) {
  return (
    <li className="list-group-item mb-1">
    <div className="card bg-light">
      <div className="card-header">{heading}</div>
      <div className="card-body bg-light">
        <p className='text-bg-light'>{details}</p>
        <span className='small text-danger bg-light'>Deadline:{date} {time}</span>
      </div>
      <div className="card-footer">
        <div className="form-group text-center bg-light">
          <button className="btn btn-success me-1">Done</button>
          <button className="btn btn-danger ms-1">Later</button>
        </div>
      </div>
    </div>
  </li>
  )
}

export default Card
