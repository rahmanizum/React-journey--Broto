import React from 'react'

function Completedcard({id,heading,details}) {
    const date = new Date();
    const options = { year: 'numeric', month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' };
    const formattedDate = date.toLocaleString('en-US', options);
    return (
        <li className="list-group-item mb-1">
        <div className="card bg-light">
          <div className="card-header">{heading}</div>
          <div className="card-body bg-light">
            <p className='text-bg-light'>{details}</p>
            <span className='small text-danger bg-light'>Completed at:{formattedDate}</span>
          </div>
        </div>
      </li>
      )
}

export default Completedcard
