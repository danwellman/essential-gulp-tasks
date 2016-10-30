class Person {
    private firstname: string;
    private lastname: string;

    constructor(firstname: string, lastname: string) {
        this.firstname = firstname;
        this.lastname = lastname;
    }

    getName() {
        return this.firstname + ' ' + this.lastname;
    }
}

let dan = new Person('Dan', 'Wellman');