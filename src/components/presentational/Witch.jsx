import React from 'react';


function Witch({image, name, patronus}) {
    return (
        <>
        <img src={image} alt={name} />
        <p>Name: {name}</p>
        <p>Patronus: {patronus}</p>
        </>
    )
}
export default Witch;