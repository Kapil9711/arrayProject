/** @format */

let arr = [
  { id: 1, name: "john", age: "18", profession: "developer" },
  { id: 2, name: "jack", age: "20", profession: "developer" },
  { id: 3, name: "karen", age: "19", profession: "admin" },
];

function PrintDeveloperbyMap() {
  //Write your code here , just console.log
  const employees = [...arr];
  employees.map((employee) => {
    if (employee.profession === "developer") console.log(employee.name);
  });
}

function PrintDeveloperbyForEach() {
  //Write your code here , just console.log
  const employees = [...arr];
  employees.forEach((employee) => {
    if (employee.profession === "developer") console.log(employee.name);
  });
}

function addData() {
  //Write your code here, just console.log
  const newEmployee = { id: 4, name: "susan", age: "20", profession: "intern" };
  arr.push(newEmployee);
  console.log(arr);
}

function removeAdmin() {
  //Write your code here, just console.log
  const employees = [...arr];
  arr = employees.filter((employee) => employee.profession !== "admin");
  console.log(arr);
}

function concatenateArray() {
  //Write your code here, just console.log
  const states = [
    { id: 21, state: "Delhi", country: "india" },
    { id: 22, fruit: "mango", season: "summer" },
    { id: 23, hotel: "holiday", city: "Bijnor" },
  ];
  const concatedArr = arr.concat(states);
  console.log(concatedArr);
}
