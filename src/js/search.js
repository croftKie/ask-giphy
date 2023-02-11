import { endPointSelector } from './app';
import { clear, searchResults, translateResults, trendingResults, giphyResults} from './results';
import searchImg from '../assets/search.svg';
import gifLogo from '../assets/gif-logo.png';
import stickerLogo from '../assets/sticker-logo.png';
import heroImg from "../assets/gif-logo.png";

let default_mode = 'GIFs';
let current_mode = default_mode;

export function buildUi(){
    clear();
    document.querySelector('#header').append(buildHero());
    document.querySelector('.content').append(buildSearchInput());
}

function modeListener(img, modeButton, buttons) {
    modeButton.addEventListener('click', (e)=>{
        if(e.target.textContent === 'Stickers') {
            img.classList.add('search-blue');
            img.classList.remove('search-purple');
            document.getElementById('logo').src = gifLogo;
            e.target.textContent = "GIFs";
            buttons.forEach((button)=>{ 
                button.style.backgroundColor = "var(--gif-color)"; 
            });
            modeButton.style.border = "5px solid var(--gif-color)";
            endPointSelector('GIFs','search');
        } else {
            img.classList.add('search-purple');
            img.classList.remove('search-blue');
            document.getElementById('logo').src = stickerLogo;
            e.target.textContent = "Stickers";
            buttons.forEach((button)=>{ 
                button.style.backgroundColor = "var(--sticker-color)"; 
            });
            modeButton.style.border = "5px solid var(--sticker-color)";
            endPointSelector('Sticker','search');
        }
    });
};

function searchTypeListeners(modeButton, buttons, input){
    buttons.forEach((button)=>{
        button.addEventListener('click',()=>{ 
            console.log(inputListener(input));
            endPointSelector(
                modeButton.textContent,
                buttons.indexOf(button),
                inputListener(input));
        });
    });
};

function inputListener(input) {
    return input.value;
}

function buildSearchInput(){
    const buttonNames = ['Search','Translate','Trending','Feeling Giphy'];
    const article = document.createElement('div');
    article.setAttribute('id','article');

    let searchBar = document.createElement('div');
    searchBar.classList.add('search-bar');
    let img = document.createElement('img');
    img.src = searchImg;
    let input = document.createElement('input');
    searchBar.append(img,input);

    let buttonArray = document.createElement('div');
    buttonArray.classList.add('button-array')
    let modeButton = document.createElement('button');
    modeButton.classList.add('mode');
    modeButton.textContent = "GIFs"
    buttonArray.append(modeButton);
    for (let i = 0; i < 4; i++) {
        let button = document.createElement('button');
        if (modeButton.textContent === "Stickers") {
            button.classList.add('sticker-button')
        } else {
            button.classList.add('gif-button');
        }
        button.classList.add('button-search');
        button.textContent = buttonNames[i];
        buttonArray.append(button);
    }

    let buttons = Array.from(buttonArray.childNodes).slice(1,5)

    modeListener(img, modeButton, buttons);
    searchTypeListeners(modeButton, buttons, input);
    article.append(searchBar,buttonArray);
    return article;
}

function buildHero(){
    const hero = document.createElement('div');
    hero.classList.add('hero-default');
    const img = document.createElement('img');
    img.setAttribute('id','logo');
    img.src = heroImg;
    img.addEventListener('click',()=>{
        buildUi();
    });
    hero.append(img);
    return hero;
}

export function headerSearch(data){
    clear();
    const header = document.getElementById('header');
    header.classList.add('header-searched');

    let logo = buildHero();
    logo.classList.add('logo');

    let searchBar = buildSearchInput();
    searchBar.classList.add('upper-search-bar');
    header.append(logo, searchBar);
}