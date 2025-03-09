// creo istanza
class User {
    
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

//controlla le proprietà name ed age siano della giusta tipologia --> test troppo generico e con poco senso
// test('controlla le proprietà name ed age siano della giusta tipologia', () => {
//     const user = new User("Elisa", 34);
//     expect(typeof user.name).toBe('string'); //in js sarebbe stato scritto così : if(typeof user.name === "string")
//     expect(typeof user.age).toBe('number');
// })
//riformulo : controllo che il costruttore mi obblighi a passare le proprietà della giusta tipologia
test('controllo che il costruttore mi obblighi a passare le proprietà della giusta tipologia', () => {
    expect(() => new User(34, 'Elisa')).toThrow();
})

//controlla le proprietà private
test('controlla le proprietà name e age sono private', () => {
    //una volta istanziato il mio user con le proprietà, poi controllo se sono undefined, nel caso vuole dire che sono private
    const user = new User("Elisa", 34);
    expect(user['#name']).toBeUndefined();
    expect(user['#age']).toBeUndefined();
})