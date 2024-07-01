type Person = {
    name: string;
    age: number;
    address?: {
        street_number: number;
        street: string;
        city: string;
        state: string;
    };
};
let person1: Person = {
    name: 'John',
    age: 30,
};
let person2: Person = {
    name: 'Mike',
    age: 40,
    address: {
        street_number: 123,
        street: 'Street',
        city: 'New York',
        state: 'NY'
    }
};
function displayInfo(person: Person) {
    console.log(`${person.name} lives at ${person.address?.street}`);
}
displayInfo(person1);
