import { endPointSelector } from './app';
import searchImg from '../assets/search.svg';
import gifLogo from '../assets/gif-logo.png';
import stickerLogo from '../assets/sticker-logo.png';
import shareImg from '../assets/share.svg';
import favouriteImg from '../assets/favourite.svg';


const buttonNames = ['Search','Translate','Trending','Feeling Giphy'];
const resultsContainer = document.querySelector('#content');
let currentMode = 'gifs';
let displayMode = 'default';

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
    displayMode = 'default';
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
    displayMode = 'search';
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

        if(currentMode === "gifs") {
            button.style.borderBottomColor = 'var(--gif-color)';
        } else if (currentMode === 'stickers') {
            button.style.borderBottomColor = 'var(--sticker-color)';
        }


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

    if(currentMode === "gifs") {
        img.src = gifLogo;
    } else if (currentMode === 'stickers') {
        img.src = stickerLogo;
    }

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

    const info = document.createElement('div');
    info.style.marginRight = "10px";
    info.style.marginBottom = "10px";
    const copiedAlert = document.createElement('p');
    copiedAlert.textContent = "Copied link!";
    copiedAlert.style.color = 'black'
    copiedAlert.style.margin = '0';
    copiedAlert.style.display = 'none';
    const share = document.createElement('img');
    share.src = shareImg;
    share.style.height = '25px';

    share.addEventListener('click',()=>{
        navigator.clipboard.writeText(gif.src);
        copiedAlert.style.display = 'inline';
        setTimeout(()=>{
            copiedAlert.style.display = 'none';
        }, 1000);
    });

    info.append(copiedAlert, share);
    card.append(gif,info);
    return card;
}


function modeSelector() {

    const arr = Array.from(document.querySelector('nav').querySelectorAll('button'));
    arr[0].style.borderBottom = "5px solid white";
    arr[1].style.borderBottom = 'none';

    arr[0].addEventListener('click',(e)=>{
        console.log("fire")
        arr[0].style.borderBottom = "5px solid white";
        arr[1].style.borderBottom = 'none';
        currentMode = 'gifs';
        if (displayMode === 'default') {
            buildDefaultUi();
        } else if (displayMode === 'search') {
            buildSearchUi();
        }
        document.querySelector('nav').classList.remove('nav-sticker');
    });
    arr[1].addEventListener('click',(e)=>{
        arr[1].style.borderBottom = "5px solid white";
        arr[0].style.borderBottom = 'none';
        currentMode = 'stickers';
        if (displayMode === 'default') {
            buildDefaultUi();
        } else if (displayMode === 'search') {
            buildSearchUi();
        }
        document.querySelector('nav').classList.add('nav-sticker');
    });  
}

modeSelector();

