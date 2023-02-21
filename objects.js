const person = {
    first: "Sarah",
    last: "Burtenshaw",
    age: 30
}
// console.log(person.first) dot notation
// console.log(person['last'])bracket notation

const meal = {
    appetizer: "Brachetta",
    entree: "Carbonara",
    dessert: "Oreo pie",
    drink: "Wine"
};

const meal2 = {
    appetizer: "Ceviche",
    entree: "Loaded nachos",
    dessert: "Tres leches",
    drink: "Cerveza"
};



let {drink, appetizer, entree, dessert} = meal
console.log(entree + " with " + drink)
// let { dessert } = meal
// let dessert = meal.dessert
let newFav = "Sprite"
meal.drink = newFav;

const { drink: drink2, appetizer: app2, entree: delicious, dessert: des2 } = meal2

// let drink2 = meal2.drink other way to rename things

//loop over meal2 
// if the key is our dessert we will update the value to be churros and print to console else print the value.

for (let key in meal2){
    if(key === "dessert"){
        meal2[key] = "churros";
        console.log(meal2[key]);
    } else{
        console.log(key,meal2[key]);
    }
}

let teams = {
    teamOne: ['ryan', 'alex', 'wyatt', 'tj'],
    teamTwo: ['henry', 'cole', 'charlie', 'zeke'],
    teamThree: ['porter', 'blake', 'june', 'owen'],
    teamFour: ['brian', 'riley', 'ezra', 'jordan'],
    teamFive: ['grey', 'milo', 'mckay', 'leo']
  }

  teams.teamSix = ["Jason", "Robert", "Michael", "Ken"];
  console.log(teams);

  delete teams["teamFour"];
  console.log(teams)