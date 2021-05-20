import React from 'react';
import PropTypes from 'prop-types';

function Witch({image, name, patronus}) {
    return (
        <>
        <img src={image} alt={name} />
        <p>Name: {name}</p>
        <p>Patronus: {patronus}</p>
        </>
    )
}

Witch.propTypes ={
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    patronus: PropTypes.string.isRequired,
}
export default Witch;