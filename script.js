let arr = [
  { id: 1, name: "john", age: "18", profession: "developer" },
  { id: 2, name: "jack", age: "20", profession: "developer" },
  { id: 3, name: "karen", age: "19", profession: "admin" },
];

function PrintDeveloperbyMap() {
  //Write your code here , just console.log
  let developers=arr.filter(employee =>
    {
        employee.profession==="developer"
    });
    developers.map(developer => console.log(developer));

}

function PrintDeveloperbyForEach() {
  //Write your code here , just console.log
  arr.forEach(employee => {
    if(employee.profession==="developer")
    console.log(employee);
    
  });
}

function addData() {
  //Write your code here, just console.log
  let newEmployee={id:4, name:"John",age:"21",profession:"Analyst"};
  arr.push(newEmployee);
  console.log(arr);

}

function removeAdmin() {
  //Write your code here, just console.log
  arr=arr.filter(employee => employee.profession !== "admin");
  console.log(arr);
}

function concatenateArray() {
    const newArray=[
        {id: 5, name: "Jane", age: "28", profession: "designer"},
        {id: 6, name: "Michael", age: "32", profession: "manager"},
        {id: 7, name: "Emily", age: "24", profession: "developer"}
    ];
    const concatenatedArray=arr.concat(newArray);
    console.log(concatenatedArray);
  //Write your code here, just console.log
}