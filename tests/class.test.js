// creo istanza
class User {
    
    constructor(name, age) {
        //controllo per lanciare l'errore
        if (!name || !age) {
            throw new Error('Name and age are required');
        }
        this.name = name;
        this.age = age;
    }
}
// creare un'istanza della classe user
test('creare un\'istanza della classe user', () => {
    const user = new User("Elisa", 34);
    //aggiungo cosa mi aspetto come risultato
    expect(user).toBeInstanceOf(User);
});

//Altri test
//Controlla che User contenga le proprietà name e age
test('Controlla che User contenga le proprietà name e age', () => {
    const user = new User("Elisa", 34);
    expect(user).toHaveProperty("name");
    expect(user).toHaveProperty("age");
});

//controlla che il costruttore obblighi a passare le proprietà necessarie
test('controlla che il costruttore obblighi a passare le proprietà necessarie', () => {
    //mi aspetto che expect che scrivere new User() senza passare niente mi ritorni un errore
    expect(() => new User()).toThrow();
    //errore anche se passo solo un parametro
    expect(() => new User("Elisa")).toThrow();
    //errore se passo solo il secondo parametro
    expect(() => new User(undefined, 23)).toThrow();
});
//controlla le proprietà name ed age siano della giusta tipologia
//controlla le proprietà private
