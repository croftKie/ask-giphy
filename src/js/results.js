const container = document.getElementById('container');
const resultsContainer = document.querySelector('.content');
const hero = document.querySelector('.hero'); 


export function clear(){
    document.getElementById('header').innerHTML = "";
    document.querySelector('.content').innerHTML = "";
} 

export function searchResults(results){
    results.forEach((result)=>{
        const gifs = document.createElement('img');
        gifs.src = result.images.original.url;
        resultsContainer.removeAttribute('id');
        resultsContainer.setAttribute('id','search-results');
        resultsContainer.append(gifs);
    });
}

export function translateResults(results) {
    const gifs = document.createElement('img');
    gifs.src = results.images.original.url;
    resultsContainer.removeAttribute('id');
    resultsContainer.setAttribute('id','translate-results');
    resultsContainer.append(gifs);
}

export function trendingResults(results) {
    results.forEach((result)=>{
        const gifs = document.createElement('img');
        gifs.src = result.images.original.url;
        resultsContainer.removeAttribute('id');
        resultsContainer.setAttribute('id','search-results');
        resultsContainer.append(gifs);
    });
}

export function giphyResults(results) {
    const gifs = document.createElement('img');
    gifs.src = results.images.original.url;
    resultsContainer.removeAttribute('id');
    resultsContainer.setAttribute('id','translate-results');
    resultsContainer.append(gifs);
}