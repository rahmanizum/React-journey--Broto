import React from 'react'

function Card({id,heading,details,date,time,onClick ,onRemove}) {
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
          <button onClick={onClick} className="btn btn-success me-1" id={id}>Done</button>
          <button onClick={onRemove} className="btn btn-danger ms-1" id={id}>Remove</button>
        </div>
      </div>
    </div>
  </li>
  )
}

export default Card
