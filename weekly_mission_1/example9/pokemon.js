//creame la clase pokemon
class Pokemon {
    constructor(name) { //creo el constructor que recibe el nombre
        this.name = name;
    }
    sayHello() { //creo la funcion sayHello
        console.log(`Mi pokemon ${this.name} te saluda!!`); 
    }
    sayMessage(message) { //creo la funcion sayMessage 
        console.log(`Mi pokemon ${this.name} dice: ${message}`);
    }
}

//exportamos la clase pokemon
module.exports = Pokemon;