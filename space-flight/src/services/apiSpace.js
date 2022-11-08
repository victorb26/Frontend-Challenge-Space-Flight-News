import axios from 'axios';

export const apiSpace = async (counter) => {
    const url = `https://api.spaceflightnewsapi.net/v3/articles?_limit=${counter}`;
    try {
        const response = await axios.get(url);
        return response.data;}
        catch (e){
            console.error("error request", e );
        }
    };
