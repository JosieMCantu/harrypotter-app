export const fetchWitches = async () => {
    const res = await fetch('http://hp-api.herokuapp.com/api/characters');

    const json = await res.json();

    return json;
}
