console.log('hello babel');

let company = {
  name: "Foo Corp",
  people: [
    {name: "Joe"},
    {name: "Alice"}
  ]
};

let newCompany = {...company};
console.log(newCompany === company);   // => false! not the same object
console.log(newCompany.people === company.people)  // => true!

let newAll =  {
  ...company,
  people: [
    ...company.people,
    {name: "Sam"}
  ]
};

console.log(newAll);


/*


let state = {
  count: 47
};

console.log(state);

let state2 = {
    ...state,
  count: 48
};

console.log(state2);
console.log(state === state2);


let person = {
  name: 'Fred',
  age: 67,
  occupation: 'engineer'
};

console.log(person);

let person2 = {
  ...person,
  name: 'Bob',
  age: 49
};

console.log(person2);


let a1 = [1,2,3,4];
let a2 = [...a1, 5, 6, 7];
let a3 = [-1, 0, ...a2];
console.log(a1);
console.log(a2);
console.log(a3);


*/