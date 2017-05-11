"use strict";

var a = 10;
var c = 2;
b();
function b() {
	const a=100;
    if (a === 100) {
         let ciccio = "Ciao!";
         console.log(ciccio);
    }
   
    console.log(a*c);
    
}

var person = {
    name: "Adriana",
    surname: "Lima",
    greet: function () {
        var self = this;
        console.log("Ciao " + self.name +" "+ self.surname);
        

        var altraFun = function(){
            return self.surname + "!!!";
        }
        console.log(altraFun());
    }
}
person.greet();

var ilfattoquatidiano = [];
ilfattoquatidaino = ilfattoqua2;


//Homework  - another example, let, var, var self = this.