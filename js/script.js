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
// Colors (dobbiamo farli abbinare ai nomi (ani,veg,user))
const colors = [
     '#ffd803',
     '#272343',
     '#bae8e8',
];

// Icon container
// querySelector e per il 1 elemento che incontra
const container = document.querySelector('.icons');
console.log(container);

// 1. situazione printare le icone a schermo
// facciamo una funzione | abbiamo cos?? (le icone stesse, e dove metterle)
// icone in biano nero
//printIcons(icons, container);

// 2. printare icone colorate (set di icone , arr di col)
const coloredIcons = colorIcons(icons, colors);
console.log(coloredIcons);

// bisogna richiamare per l'agg dei color (quelle colorate ,! no bc)
printIcons(coloredIcons, container)


// 3. Filter icons
// A. Gen select options(bisogna app dentro il select del html)
const select = document.querySelector('#type');

// voglia mettere tutti i type dentro la nostr app, 1 salvi i dati qua e poi fun che nutre la select
//             getType serve un set da pass cosa vuoi pass qua?( coloredIcons generate su)

const types = getType(coloredIcons);
genOption(types, select);

// B. filter on Change (capire come fare una selezione)
//                    (che iterazione ho qui?)
select.addEventListener('change' , () => {
    //console.log('CHANGE');
    // in lettura
    //console.log( select.value );
    
    const selected = select.value;
    
    const filteredIcons = filterIcons(coloredIcons, selected);
    printIcons(filteredIcons, container);
});




/*********************************
 * Functions
 ********************************/

/** 1
 * print icons pn screen (sono parametri)
 */
function printIcons(icons, container) {
    //console.log(icons);
    //Generare il markup per le icone| let perch?? si deve sovrascrivere ogni volta
    let  html = '';
    icons.forEach( (icon) => {
       // destrutturazione
       const {family, prefix, name, color} = icon;

       html +=
       // qua ti porti ul markup, ora lo cambi , interpolazione| agg dopo color (des ${color}, (no des ${icon.color}))
       `<div class="icon p-20">
                <i class="${family} ${prefix}${name}" 
                    style="color:${color}"></i>
                <div class="title">${name}</div>
        </div>`;
    });
    console.log(html);
    
    // mettere il contenuto all interno del container icons
    container.innerHTML = html;

}
/**2
 * Return color icon collection con i type
 */
// quanti type ci sono univoci capirlo in modo dinamico| DOPO ag colors
function colorIcons(icons, colors) {
    // fun x i type
    const types = getType(icons) 
    console.log(types);
    console.log(colors);
    
    // Assegnare un colore per tipo ad ogni icona. creando un arr nuovo, senza mod arr vecchio (map)
    // questo perch?? poi e quello che portiamo fuori con il return
    
    
    const coloredIcons = icons.map((icon) => {
       // capire il type di questa icone dov'??| come ott l'indice di pos x l'arr
        const indexType = types.indexOf(icon.type);
        
        // ...icon - copia pulita di tutto e sotto metto cosa voglio agg
        return {
           ...icon,
           color: colors[indexType],
        }
    });
    return coloredIcons;
    //
    //console.log(coloredIcons);
}

/**3
 * Get icons type (univoche 1 solo per categoria)| quante volte accade | qua ci iteriamo dentro
 */
function getType(icons) {
    //partono da un arr
    const types = [];
    icons.forEach( (icon) => {
      
        if(! types.includes(icon.type)) {
            types.push(icon.type)
        }
    }); // per tiralo fuori
   return types;
}

/**
 * Gen option for filter
 */
function genOption(types, select) {
    //generazione delle nostre opz
    let options = '';
    types.forEach((type) => {    // des
        options += ` <option value="${type}">${type}</option>`
    });
    // ! non sovrascrivere all presente nel html per quello +=
    select.innerHTML += options;
}

/**
 * Filter icon select
 */
function filterIcons(icons, selected) {
    
    if(selected === 'all') {
        return icons;
    }

    const filtered = icons.filter((icon) => {

        return icon.type === selected;
    });

    return filtered;
}