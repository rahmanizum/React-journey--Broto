import React from 'react';

function Card({ name, image, bio }) {
  return (
    <div className="card" style={{ width: '18rem' }}>
      <h2>{name}</h2>
      <img src={`https://picsum.photos/seed/${image}/200`} alt={name} />
      <div className="card-body">
        <p className="card-text">{bio}</p>
      </div>
    </div>
  );

}

export default Card;
