let name = 'John';
const age = 101;
const pets = ["cat", "dog"];

const petObjects = [];

for (let i = 0; i < pets.length; i++) {
    const pet = {
        type: pets[i]
    };
    if (pets[i] === "cat") {
        name = "fluffy";
    } else {
        name = "spot";
    }
    pet.name = name;
    petObjects.push(pet);
}

console.log(petObjects);