const person={fname:"gokul",age:18};
// const p1={};
// const p2=new Object;
// const p3=Object.create(null);
console.log(person);
console.log(person.fname);

console.log(Object.keys(person));
console.log(Object.values(person));
console.log(Object.entries(person));
console.log("\n");
console.log("------------------------------------------------------------------------------------------------------")
const result=Object.entries(person).map(([key,value])=>`${key}:${value}`)
console.log(result);
console.log("-------------------------------------------------------------------------------------------------------")

const result1=Object.entries(person).map(([i])=>`${i}`)
console.log(result1);
console.log("-------------------------------------------------------------------------------------------------------")

const result2=Object.entries(person).map(([i,j,k])=>`${i}:${j}:${k}`)
console.log(result2);
console.log("-------------------------------------------------------------------------------------------------------")

person.fname="vishnubabu";
person["age"]=99;
console.log(person);
const result3=Object.entries(person).map(([i,j,k])=>`${i}:${j}:${k}`)
console.log(result3);
console.log("-------------------------------------------------------------------------------------------------------")
//SPREAD 
const person2={...person,newage:200,namea:"babu"}
// console.log(person2);
console.log("-------------------------------------------------------------------------------------------------------")

//REST
const{age,...rest}=person2;
console.log(rest);
//console.log(person2);
console.log("-------------------------------------------------------------------------------------------------------")

const arr={"name":"vasanth","agenew":"45"}
console.log(arr);
const jsonstr=JSON.stringify(arr);
console.log(jsonstr)
const rev=JSON.parse(jsonstr)
console.log(rev);

console.log("-------------------------------------------------------------------------------------------------------")

const arr1={"name":"vasanth","agenew":45}//integer to string 
// console.log(arr1);
const jsonstrr=JSON.stringify(arr,arr1);
console.log(jsonstrr)
const revv=JSON.parse(jsonstrr)
console.log(revv);
