import React from 'react';
import Witch from './Witch';
import {useWitches} from '../../hooks/thisWitch';

export const WitchList = () => {
    const {witches} = useWitches(); 

return (<ul aria-label='witches'>
        {witches.map((witch) => (
        <li key={witch.id + witch.name}><Witch 
        name={witch.name}
        image={witch.image}
        patronus={witch.patronus}/>
        </li>
        ))}
</ul>)}
