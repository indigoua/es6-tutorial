//Dimostrazione delle closure

function salutatore(preambolo) {

    return function(nome) {
        console.log(preambolo+", "+nome+"!");
    }
}

var salutatoreEducato = salutatore("Buongiorno");
var salutatoreAllegro = salutatore("Wella");
salutatoreEducato("Alex");
salutatoreAllegro("Adriana Lima");
