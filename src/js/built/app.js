var Person = (function () {
    function Person(firstname, lastname) {
        this.firstname = firstname;
        this.lastname = lastname;
    }
    Person.prototype.getName = function () {
        return this.firstname + ' ' + this.lastname;
    };
    return Person;
}());
var dan = new Person('Dan', 'Wellman');

//# sourceMappingURL=app.js.map
