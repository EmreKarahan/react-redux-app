class Person {
  constructor(name) {
    this.name = name;
  }

  getName() {
    return this.name;
  }
}

class Example extends Person {
  constructor(name, lastname) {
    super(name);

    this.lastname = lastname;
  }

  getLastName() {
    return this.lastname;
  }

  getFullName() {
    return `${this.getName()} ${this.getLastName()} `;
  }
}

const person = new Example('emre', 'karahan');

console.log(person.getFullName());
