import { endPointSelector } from './app';
import searchImg from '../assets/search.svg';
import gifLogo from '../assets/gif-logo.png';
import stickerLogo from '../assets/sticker-logo.png';


const buttonNames = ['Search','Translate','Trending','Feeling Giphy'];
const resultsContainer = document.querySelector('#content');

export function typeListener(){
    const buttons = document.querySelectorAll('.button-search')
    const buttonArray = Array.from(buttons);
    const input = document.querySelector('input');
    buttonArray.forEach((button)=>{
        button.addEventListener('click',()=>{ 
            endPointSelector(
                'GIFs',
                buttonArray.indexOf(button),
                input.value);
        });
    });
};

export function buildDefaultUi(){
    clearUi();
    document.querySelector('#header').append(buildHero());
    document.querySelector('#content').append(buildSearchInput());

    document.querySelector('#container').style.gridTemplateRows = null;
}

export function buildSearchUi(){
    clearUi();
    document.querySelector('#header').append(buildHero());
    document.querySelector('.hero-default').classList.add('hero-searched');
    document.querySelector('#header').append(buildSearchInput());
    document.querySelector('.article').classList.add('article-searched');

    document.querySelector('.search-bar').classList.add('search-bar-searched');
    document.querySelector('.button-array').classList.add('button-array-searched');

    document.querySelector('#container').style.gridTemplateRows = "40px 100px 1fr"
}


function clearUi() {
    document.getElementById('header').innerHTML = "";
    document.querySelector('#content').innerHTML = "";
};

function buildSearchInput(){
// SEARCH BAR
    const article = document.createElement('div');
    article.classList.add('article');
    const searchBar = document.createElement('div');
    let img = document.createElement('img');
    let input = document.createElement('input');
    searchBar.classList.add('search-bar');
    img.src = searchImg;

// SEARCH BUTTONS
    let buttonArray = document.createElement('div');
    buttonArray.classList.add('button-array');
    for (let i = 0; i < 4; i++) {
        let button = document.createElement('button');
        button.classList.add('button-search');
        button.textContent = buttonNames[i];
        buttonArray.append(button);
    };
    let buttons = Array.from(buttonArray.childNodes);
    buttons.forEach((button)=>{
        button.addEventListener('click',()=>{
            buildSearchUi();
            typeListener();
            console.log(buttons.indexOf(button));
        });
    });  

// append children to parents
    searchBar.append(img,input);
    article.append(searchBar,buttonArray);

// return complete module
    return article;
}

function buildHero(){
// HERO SECTION
    const hero = document.createElement('div');
    const img = document.createElement('img');

    hero.classList.add('hero-default');
    img.classList.add('logo');
    img.src = gifLogo;

    img.addEventListener('click',()=>{
        buildDefaultUi();
        typeListener();
    });

// append to parents
    hero.append(img);

// return  complete module
    return hero;
}


export function searchResults(results){
    results.forEach((result)=>{
        const gifs = document.createElement('img');
        gifs.src = result.images.original.url;
        resultsContainer.style.justifyContent = "space-around";
        resultsContainer.append(gifs);
    });
}

export function translateResults(results) {
    const gifs = document.createElement('img');
    gifs.src = results.images.original.url;
    resultsContainer.style.justifyContent = "space-around";
    resultsContainer.append(gifs);
}

export function trendingResults(results) {
    results.forEach((result)=>{
        const gifs = document.createElement('img');
        gifs.src = result.images.original.url;
        resultsContainer.style.justifyContent = "space-around";
        resultsContainer.append(gifs);
    });
}

export function giphyResults(results) {
    const gifs = document.createElement('img');
    gifs.src = results.images.original.url;
    resultsContainer.style.justifyContent = "space-around";
    resultsContainer.append(gifs);
}



// function modeListener(img, modeButton, buttons) {
//     modeButton.addEventListener('click', (e)=>{
//         if(e.target.textContent === 'Stickers') {
//             img.classList.add('search-blue');
//             img.classList.remove('search-purple');
//             document.getElementById('logo').src = gifLogo;
//             e.target.textContent = "GIFs";
//             buttons.forEach((button)=>{ 
//                 button.style.backgroundColor = "var(--gif-color)"; 
//             });
//             modeButton.style.border = "5px solid var(--gif-color)";
//             endPointSelector('GIFs','search');
//         } else {
//             img.classList.add('search-purple');
//             img.classList.remove('search-blue');
//             document.getElementById('logo').src = stickerLogo;
//             e.target.textContent = "Stickers";
//             buttons.forEach((button)=>{ 
//                 button.style.backgroundColor = "var(--sticker-color)"; 
//             });
//             modeButton.style.border = "5px solid var(--sticker-color)";
//             endPointSelector('Sticker','search');
//         }
//     });
// };