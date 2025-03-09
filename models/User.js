// creo istanza
class User {
    #name;
    #age;
    constructor(name, age) {
        //controllo per lanciare l'errore
        if (!name || !age) {
            throw new Error('Name and age are required');
        }
        //controllo per capire se sono stringhe e numeri
        if(typeof name !== 'string') {
            throw new Error('name deve essere stringa!')
        }
        if(typeof age !== 'number') {
            throw new Error('name deve essere numero!')
        }
        this.#name = name;
        this.#age = age;
    }

    get name() {
        return this.#name;
    }

    get age() {
        return this.#age;
    }

    set name(newName) {
        if(newName !== 'string') {
            throw new Error('name deve essere una stringa');
        }
        this.#name = newName;
    }

    set age(newAge){
        if(newAge !== 'number') {
            throw new Error('name deve essere un numero');
        }
        this.#age = newAge;
    }
}

module.exports = User;