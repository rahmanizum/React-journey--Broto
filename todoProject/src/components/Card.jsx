import React from 'react'

function Card({title}) {
  return (
    <li className="list-group-item mb-1">
    <div className="card bg-light">
      <div className="card-header">{title}</div>
      <div className="card-body bg-light">Lorem ipsum dolor sit amet.</div>
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
