//Mostro come funziona il destructuring

let person = {
    name: "Oleksandr",
    surname: "Komarevych",
    cellphone: "12343243",
    email: "alex@alex.it"
};

//Destructuring dell'oggetto
//Before ECMA 6:
//var name = person.name;
//var surname = person.surname;

({name, surname} = person);
console.log(name);
console.log(surname);