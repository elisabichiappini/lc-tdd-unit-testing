// creare un'istanza della classe user

test('creare un\'istanza della classe user', () => {
    const user = new User();
    //aggiungo cosa mi aspetto come risultato
    expect(user).toBeInstanceOf(User());
});