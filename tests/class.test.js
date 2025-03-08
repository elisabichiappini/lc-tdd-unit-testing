
    // creo istanza
    class User {
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }
    }
// creare un'istanza della classe user
test('creare un\'istanza della classe user', () => {

    const user = new User();
    //aggiungo cosa mi aspetto come risultato
    expect(user).toBeInstanceOf(User);
});

//Altri test
//Controlla che User contenga le proprietà name e age

test('Controlla che User contenga le proprietà name e age', () => {

    const user = new User();
    expect(user).toHaveProperty("name");
    expect(user).toHaveProperty("age");
})

//controlla che il costruttore obblighi a passare le proprietà necessarie
//controlla le proprietà name ed age siano della giusta tipologia
//controlla le proprietà private
