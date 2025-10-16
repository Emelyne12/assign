
let person = {
  name: "Emelyne",
  age: 19,
  country: "Rwanda"
};

person.hobby = "Designing websites";

person.age = 19;

delete person.country; 

console.log("Person Object:");
for (let key in person) {
  console.log(`${key}: ${person[key]}`);
}

let students = [
  { name: "Didi", grade: 90 },
  { name: "Chris", grade: 82 },
  { name: "Fanny", grade: 88 },
  { name: "Tifa", grade: 75 }
];

console.log("\nStudent Scores:");
for (let student of students) {
  console.log(`${student.name} scored ${student.grade}`);
}

let topStudents = students.filter(student => student.grade >= 85);
console.log("\nTop Students (grade ≥ 85):", topStudents);

let studentNames = students.map(student => student.name);
console.log("\nList of Student Names:", studentNames);

let products = [
  { name: "Phone", price: 500, quantity: 2 },
  { name: "Laptop", price: 1000, quantity: 1 },
  { name: "Headphones", price: 150, quantity: 3 }
];

let productTotals = products.map(product => ({
  name: product.name,
  totalValue: product.price * product.quantity
}));
console.log("\nProduct Totals:", productTotals);

let totalInventoryValue = products.reduce((sum, product) => {
  return sum + (product.price * product.quantity);
}, 0);

console.log("\nTotal Value of All Products:", totalInventoryValue);
