import '../css/style.css'

document.querySelector('.mode').addEventListener('click', (e)=>{
    if(e.target.textContent === 'Sticker') {
        e.target.textContent = "GIF";
        document.querySelectorAll('.button-search').forEach((button)=>{
            button.style.backgroundColor = "var(--gif-color)";
        });
        document.querySelector('.mode').style.border = "5px solid var(--gif-color)";
    } else {
        e.target.textContent = "Sticker";
        document.querySelectorAll('.button-search').forEach((button)=>{
            button.style.backgroundColor = "var(--sticker-color)";
        });
        document.querySelector('.mode').style.border = "5px solid var(--sticker-color)";
    }
});