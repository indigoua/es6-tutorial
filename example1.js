var example =  {
    brand: "Tesla",
    model: "Y",
    owner: "Yukki Makhohito",
    cardCar: function () {
        var self = this;
        console.log("It is " + " "+ self.brand + " "+ self.model + self.owner);

        let countryExportCar = function () {
            return self.brand + " # "+ self.model + " "+"!";
        }
        console.log(countryExportCar());
    }
}

example.cardCar();



var a = 55;
var b = 10;
c();
function c() {

    if (true) {
        let a = 33;
        console.log(a*b);
    }
    console.log(a*b);
};

//scope: dove è visibile/cgiamabile una variabile
// var globale se non è dentro na funzione, altrimenti è  legato alla funzione
//let è legato al blocco (ciclo o funzione)

var father = {
    
}