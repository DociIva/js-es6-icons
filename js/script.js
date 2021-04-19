/*********************************
 * Icond display
 ********************************/

// Icon set (ipotetica sorgente esterna dati)
const icons = [
    {
        name: 'cat',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas',
    },
    {
        name: 'crow',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas',
    },
    {
        name: 'dog',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas',
    },
    {
        name: 'dove',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas',
    },
    {
        name: 'dragon',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas',
    },
    {
        name: 'horse',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas',
    },
    {
        name: 'hippo',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas',
    },
    {
        name: 'fish',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas',
    },
    {
        name: 'carrot',
        prefix: 'fa-',
        type: 'vegetable',
        family: 'fas',
    },
    {
        name: 'apple-alt',
        prefix: 'fa-',
        type: 'vegetable',
        family: 'fas',
    },
    {
        name: 'lemon',
        prefix: 'fa-',
        type: 'vegetable',
        family: 'fas',
    },
    {
        name: 'pepper-hot',
        prefix: 'fa-',
        type: 'vegetable',
        family: 'fas',
    },
    {
        name: 'user-astronaut',
        prefix: 'fa-',
        type: 'user',
        family: 'fas',
    },
    {
        name: 'user-graduate',
        prefix: 'fa-',
        type: 'user',
        family: 'fas',
    },
    {
        name: 'user-ninja',
        prefix: 'fa-',
        type: 'user',
        family: 'fas',
    },
    {
        name: 'user-secret',
        prefix: 'fa-',
        type: 'user',
        family: 'fas',
    },
];

// Icon container
// querySelector e per il 1 elemento che incontra
const container = document.querySelector('.icons');
console.log(container);
// 1. situazione printare le icone a schermo
// facciamo una funzione | abbiamo così (le icone stesse, e dove metterle)

printIcons(icons, container);






/*********************************
 * Functions
 ********************************/

/**
 * print icons pn screen (sono parametri)
 */
function printIcons(icons, container) {
    //console.log(icons);
    //Generare il markup per le icone| let perchè si deve sovrascrivere ogni volta
    let  html = '';
    icons.forEach( (icon) => {
       // destru
       const {family, prefix, name} = icon;

       html +=
       // qua ti porti ul markup, ora lo cambi , interpolazione
       `<div class="icon p-20">
                <i class="${family} ${prefix}${name}" 
                    style="color:#333"></i>
                <div class="title">${name}</div>
        </div>`;
    });
    console.log(html);
    
    // mettere il contenuto
    container.innerHTML = html;
    
}





