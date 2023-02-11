import '../css/style.css'
import { buildDefaultUi, buildSearchUi, typeListener} from './search';

window.addEventListener("load",()=>{
    loadDefault();
});

function loadDefault(){
    buildDefaultUi();
    typeListener();
}