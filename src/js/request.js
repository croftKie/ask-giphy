import { API_KEY } from '../../config';
import { searchResults, translateResults, trendingResults, giphyResults} from './search';

export function searchEndPoint(mode, endpoint, input){
    gifFetch(mode, endpoint, input).then((data)=>{
        searchResults(data.data);
    });
}

export function translateEndPoint(mode, endpoint, input){
    gifFetch(mode, endpoint, input).then((data)=>{
        translateResults(data.data)
    });
}

export function trendingEndPoint(mode, endpoint){
    gifFetch(mode, endpoint).then((data)=>{
        trendingResults(data.data)
    });
}

export function randomEndPoint(mode, endpoint, input){
    gifFetch(mode, endpoint, input).then((data)=>{
        giphyResults(data.data)
    });
}

async function gifFetch(mode, endpoint, input = 'dog'){
    if(endpoint === 'search') {
        const response = await fetch(`https://api.giphy.com/v1/${mode}/${endpoint}?api_key=${API_KEY}&q=${input}&limit=30&offset=0&rating=pg-13&lang=en`,{mode: 'cors'});
        const data = await response.json();
        return data
    } else if (endpoint === 'translate') {
        const response = await fetch(`https://api.giphy.com/v1/${mode}/${endpoint}?api_key=${API_KEY}&s=${input}`,{mode: 'cors'});
        const data = await response.json();
        return data
    } else if (endpoint === 'trending') {
        const response = await fetch(`https://api.giphy.com/v1/${mode}/${endpoint}?api_key=${API_KEY}&limit=30&rating=pg-13`);
        const data = await response.json();
        return data
    } else if (endpoint === 'random') {
        const response = await fetch(`https://api.giphy.com/v1/${mode}/${endpoint}?api_key=${API_KEY}&tag=${input}&rating=pg-13`);
        const data = await response.json();
        return data;
    }
}

