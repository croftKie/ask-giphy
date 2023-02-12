import { endPointSelector } from './app';
import searchImg from '../assets/search.svg';
import gifLogo from '../assets/gif-logo.png';
import stickerLogo from '../assets/sticker-logo.png';
import shareImg from '../assets/share.svg';
import favouriteImg from '../assets/favourite.svg';


const buttonNames = ['Search','Translate','Trending','Feeling Giphy'];
const resultsContainer = document.querySelector('#content');

export function typeListener(){
    const buttons = document.querySelectorAll('.button-search')
    const buttonArray = Array.from(buttons);
    const input = document.querySelector('input');
    buttonArray.forEach((button)=>{
        button.addEventListener('click',()=>{ 
            endPointSelector(
                currentMode,
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
        const gif = document.createElement('img');
        gif.src = result.images.original.url;
        resultsContainer.append(buildCard(gif));
    });
}

export function translateResults(results) {
    const gif = document.createElement('img');
    gif.src = results.images.original.url;
    resultsContainer.append(buildCard(gif));
}

export function trendingResults(results) {
    results.forEach((result)=>{
        const gif = document.createElement('img');
        gif.src = result.images.original.url;
        resultsContainer.append(buildCard(gif));
    });
}

export function giphyResults(results) {
    const gif = document.createElement('img');
    gif.src = results.images.original.url;
    resultsContainer.append(buildCard(gif));
}

function buildCard(gif){
    const card = document.createElement('div');
    card.classList.add('card');

    const buttons = document.createElement('div');
    const share = document.createElement('img');
    const favourite = document.createElement('img');
    share.src = shareImg;
    favourite.src = favouriteImg;
    buttons.append(share, favourite)
    card.append(gif,buttons);
    return card;
}

let currentMode = 'gifs';
function modeSelector() {

    const arr = Array.from(document.querySelector('nav').querySelectorAll('button'));
    arr[0].style.borderBottom = "5px solid white";
    arr[1].style.borderBottom = 'none';

    arr[0].addEventListener('click',(e)=>{
        arr[0].style.borderBottom = "5px solid white";
        arr[1].style.borderBottom = 'none';
        currentMode = 'gifs';
        
        document.querySelector('nav').classList.remove('nav-sticker');
    });
    arr[1].addEventListener('click',(e)=>{
        arr[1].style.borderBottom = "5px solid white";
        arr[0].style.borderBottom = 'none';
        currentMode = 'stickers';

        document.querySelector('nav').classList.add('nav-sticker');
    });  
}

modeSelector();