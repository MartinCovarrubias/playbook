//crea la clase pokemon
class Pokemon {
    constructor(name) { //creo el constructor que recibe el nombre
        this.name = name;
    }
    sayHello() { //creo la funcion sayHello
        console.log(`Mi pokemon ${this.name} te saluda!!`); 
    }  
}

//exportamos la clase pokemon usando ESM
export default Pokemon;
