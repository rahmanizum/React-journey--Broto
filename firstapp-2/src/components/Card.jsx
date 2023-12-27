import React from 'react'

function Card({id,title}) {
  return (
<div className='col-md-4 col-lg-3 mb-4'>
<div className="card " >
      <h2>{`product ${id}`}</h2>
      <img src={`https://picsum.photos/seed/${id}/200`} alt={id} />
      <div className="card-body">
        <p className="card-text">{title}</p>
      </div>
    </div>
</div>
  )
}

export default Card
