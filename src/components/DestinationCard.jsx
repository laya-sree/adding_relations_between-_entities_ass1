import React from 'react';
import PropTypes from 'prop-types';


function DestinationCard({ destination }) {
  return (
    <div className="card">
      <img src={destination.image} alt={destination.name} className="card-image" />
      <h2>{destination.name}</h2>
      <p>{destination.location}</p>
      <p>{destination.description}</p>
      <p>{destination.price}</p>
    </div>
  );
}

DestinationCard.propTypes = {
  destination: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
  }).isRequired,
};

export default DestinationCard;