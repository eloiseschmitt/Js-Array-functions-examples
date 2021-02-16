/* 
* ARRAY.FILTER() 
* Return Array
* Ne change pas l'array original
*/

// Créer un nouveau tableau avec tous les élements dont la lg est > à 6
const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];
const result = words.filter(word => word.length > 6);
//console.log(result);

// Créer un nouveau tableau avec tous les élements dont la valeur est > ou = à 18
const ages = [32, 33, 16, 40];
const result1 = ages.filter(age => age >= 18);
//console.log(result1);

// Fonctionne avec un tableau d'objets:
const heroes = [
    {name: 'Batman', franchise: 'DC'},
    {name: 'Ironman', franchise: 'Marvel'},
    {name: 'Thor', franchise: 'Marvel'},
    {name: 'Superman', franchise: 'DC'}
];

const marvelHeroes = heroes.filter(hero => hero.franchise == 'Marvel');
//console.log(marvelHeroes);

// Utiliser filter() pour trouver des doublons dans un array :
let strArray = [ "q", "w", "w", "w", "e", "i", "u", "r", "u"];
let findDuplicates = arr => arr.filter((item, index) => arr.indexOf(item) != index)

console.log(findDuplicates(strArray)) // All duplicates
console.log([...new Set(findDuplicates(strArray))]) // Unique duplicates

/**
 * ARRAY.FIND()
 * Return Any (la valeur du 1er élément trouvé)
 */

 // Retourne 12
const array1 = [5, 12, 8, 130, 44];
const found = array1.find(element => element > 10);
//console.log(found);

// Trouver un objet dans un tableau grâce à une de ses propriétés
const inventaire = [
    {nom: 'pommes', quantité: 2},
    {nom: 'bananes', quantité: 0},
    {nom: 'cerises', quantité: 5}
  ];

const resultat = inventaire.find( fruit => fruit.nom === 'cerises');
//console.log(resultat);
// retourne {nom: 'cerises', quantité: 5}

// Trouver un nombre entier dans un tableau
function estPremier(element, index, array) {
    let début = 2;
    while (début <= Math.sqrt(element)) {
        if (element % début ++ < 1) return false;
    }
    return (element > 1);
}

//console.log( [4, 6, 8, 12].find(estPremier) ); // undefined, rien trouvé
//console.log( [4, 5, 8, 12].find(estPremier) ); // 5


/**
 * ARRAY MAP()
 * Return Array
 * Applique une f° sur chaque élement du tableau et en crée un nouveau
 */

const array2 = [1, 4, 9, 16];
const map1 = array2.map(x => x * 2);
//console.log(map1);

// Changer le format d'objets dans un tableau
const tableauOrig = [{clé:1, valeur:10}, {clé:2, valeur:20}, {clé:3, valeur: 30}];
const tableauFormaté = tableauOrig.map(obj => { 
  var rObj = {};
  rObj[obj.clé] = obj.valeur; 
  return rObj;
});
// tableauFormaté vaut maintenant [{1:10}, {2:20}, {3:30}], 
// tableauOrig vaut toujours 
// [{clé:1, valeur:10},
//  {clé:2, valeur:20},
//  {clé:3, valeur: 30}
// ]

// Utiliser map avec querySelectorAll
const elems = document.querySelectorAll('select option:checked');
const values = Array.prototype.map.call(elems, function(obj) {
  return obj.value;
});

/**
 * ARRAY.SORT()
 * Return array
 * ATTENTION ! Modifie le tableau de base
 */

// Trier les nombres d'un tableau du + petit au + grand
let nombres = [4, 2, 5, 1, 3];
nombres.sort((a, b) => a - b);
console.log(nombres); // [1, 2, 3, 4, 5]

// Même chose avec un objet
let personnages = [
    { nom: "Sophie", age: 23 },
    { nom: "Jean", age: 87 },
    { nom: "Karim", age: 13 },
    { nom: "Jean-Eude", age: 65 },
    { nom: "Martine", age: 56 },
];
personnages.sort((a, b) => {
    return a.age - b.age;
})
console.log(personnages);

/**
 * ARRAY INCLUDES()
 * Return Boolean
 * Détermine si un tableau contient une valeur
 */
 function array_diff(a, b) {
    return a.filter(e => !b.includes(e));
  }
// Array_diff compare 2 tableaux et renvoie le tableau a sans les valeurs présentes dans b
