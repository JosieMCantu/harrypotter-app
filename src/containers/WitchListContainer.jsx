import React, {useState, useEffect} from 'react';
import {WitchList} from '../components/presentational/WitchList';
import {useWitches} from '../hooks/thisWitch';

function WitchListContainer() {
    const {witches, loading} = useWitches();

    if(loading) { 
        return <h1>Loading...</h1>
    }

    return (
        <>
            <WitchList witches={witches}/>
        </>
    )
}
export default WitchListContainer;
