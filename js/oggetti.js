persona = {
    name: "Mario",
    surname: "Rossi",
    greet: function () {
        return "ciao" + this.name +" "+this.surname;
    }
}


class Casa {
    constructor(stanze, mq, categorie){
        this.stanze = stanze;
        this.mq = mq;
        this.categorie = categorie;
        this.prezzoMq = 0;
    }

    setPrezzoMq(prezzoMq) {
        this.prezzoMq = prezzoMq;
    }
    calcolaPrezzo(){
        return this.prezzoMq*this.mq;
    }
    stampa() {
        return "Casa con " +this.stanze+ "stanze";
    }
}

let topaia = new Casa(1,10, "Z");
let atticoFichissimo = new Casa (12, 450, "A++++++");

topaia.setPrezzoMq(1);
atticoFichissimo.setPrezzoMq(1234567);

console.log(topaia.calcolaPrezzo());
console.log(atticoFichissimo.calcolaPrezzo());

class Ufficio extends Casa {
    constructor(stanze, mq, tipoAgi) {
        super(stanze, mq, "UFF");
        this.tipoAgi = tipoAgi;
    }

    daiAgibilita(tipoAgi) {
        this.tipoAgi = tipoAgi
    }
    stampa() {
        return "Ufficio con "+this.stampa+ " stanze e agibilita "+this.tipoAgi;
    }
}

var studioLegale = new Ufficio(4, 130, "Commerciale");
console.log(studioLegale.stampa());
console.log(atticoFichissimo.stampa());