const container = document.getElementById('container');
const resultsContainer = document.getElementById('article');
const hero = document.querySelector('.hero'); 


export function clear(){
    resultsContainer.innerHTML = "";
} 

export function searchResults(results){
    container.classList.add('container-search');
    container.classList.remove('container');

    resultsContainer.classList.add('search-results');
    resultsContainer.classList.remove('search')
    results.forEach((result)=>{
        const gifs = document.createElement('img');
        gifs.src = result.images.original.url;
        resultsContainer.append(gifs);
    });
    hero.style.alignSelf = "start";
}

export function translateResults(results) {
    container.classList.add('container-search');
    container.classList.remove('container');

    resultsContainer.classList.add('search-results');
    resultsContainer.classList.remove('search')
    const gifs = document.createElement('img');
    gifs.src = results.images.original.url;
    resultsContainer.append(gifs);
    hero.style.alignSelf = "start";
}

export function trendingResults(results) {
    container.classList.add('container-search');
    container.classList.remove('container');

    resultsContainer.classList.add('search-results');
    resultsContainer.classList.remove('search')
    results.forEach((result)=>{
        const gifs = document.createElement('img');
        gifs.src = result.images.original.url;
        resultsContainer.append(gifs);
    });
    hero.style.alignSelf = "start";
}

export function giphyResults(results) {
    container.classList.add('container-search');
    container.classList.remove('container');

    resultsContainer.classList.add('search-results');
    resultsContainer.classList.remove('search')
    const gifs = document.createElement('img');
    gifs.src = results.images.original.url;
    resultsContainer.append(gifs);
    hero.style.alignSelf = "start";
}