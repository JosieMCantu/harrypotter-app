import {useEffect, useState} from 'react';
import {fetchWitches} from '../services/HarryPotterApi';

export const useWitches = () => {
    const [witches, setWitches] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchWitches()
        .then(setWitches)
        .finally(() => setLoading(false));
    }, []);

    return {witches, loading}
}