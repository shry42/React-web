import React from 'react';

const Card = () => {
  return (
    <div className="card">
      {/* Add your card content here */}
      <img src={process.env.PUBLIC_URL + '/Hair.jpeg'} alt="Card" className="card-image" />
    </div>
  );
};

export default Card;