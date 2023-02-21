class Dog {
    constructor(name, breed, age){
        this.name = name;
        this.breed = breed;
        this.age = age;
        this.hypoAllergenic = false;
    }
    updateHypo(){
        this.hypoAllergenic = true;
    }
    gretting(){
        console.log(`Hi my name is ${this.name} and I am an ${this.age} year old ${this.breed}`)
    }
} 

const dog1 = new Dog("Buddy", "Golden retriever", 5)
const dog2 = new Dog("Alaska", "Cockapoo", 3);

dog2.updateHypo();

// console.log(dog1)
// console.log(dog2)

class Puppy extends Dog {
    constructor(name, breed, age, color){
        super(name, breed, age)
        this.color = color;
        this.trainingLevel = 0;
    }
    updateTraining(num){
        this.trainingLevel += num;
    }
}


const puppers = new Puppy("Kevin", "Yorkshire Terrior", .6, "brown/black")
const puppers2 = new Puppy("Wonda", "Irish Setter", 1, "Golden Brown")

puppers.updateHypo();
puppers2.updateTraining(1);

console.log(puppers);
puppers.greeting();

console.log(puppers2)
puppers2.greeting()