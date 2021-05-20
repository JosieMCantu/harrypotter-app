import React from 'react';
import Witch from './Witch';
import PropTypes from 'prop-types';

export const WitchList = ({witches}) => (<ul aria-label='witches'>
{witches.map((witch) => (
    <li key={witch.id + witch.name}><Witch 
    name={witch.name}
    image={witch.image}
    patronus={witch.patronus}/>
    </li>
    ))}
</ul>);

WitchList.propTypes = {
    witches: PropTypes.arrayOf(
        PropTypes.shape({
            name: PropTypes.string.isRequired,
            image: PropTypes.string.isRequired,
            patronus: PropTypes.string.isRequired,
        })
    )
}
