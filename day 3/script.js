// // // const a=10;
// // // {
// // //      let a=20;
// // //     console.log("inner",a);
// // // }
// // // //const a=10;
// // // console.log("outer",a);


// // // var b=10;
// // // {
// // //     var b=20;
// // //     console.log(b);
// // // }
// // // console.log(b);

// // // var c=10;
// // // {
// // //     let c=20;
// // //     console.log(c);
// // // }
// // // console.log(c);

// // // const a=20;
// // // {
// // //     const a=BigInt(20);
// // //     console.log(" inner ",a);
// // //     console.log("type",typeof(a));
// // // }
// // // console.log(" outer ",a);
// // // console.log("type",typeof(a));
// // // if(typeof(a)==BigInt)
    
// // //     console.log("bigint");
// // // else
// // //     console.log(typeof(a));
// // pk()


// // function pk(){
// //     console.log("pk")
// // }
// // function pk(){
// //     console.log("kk")
// // }


// // // const num=function(){
// // //     console.log("kedari thungu munghi")
// // //     cons

// // // }




// // // const num=()=>{
// // //     console.log("gate pass ready")
// // // }

// // // num();


// // //IIF-Immediately invoked function

// // // (function()
// // // {
// // //     console.log("hello")
// // // })()

// // const outter=()=>{
// //     const a="const from the outter";
// //     const inner=()=>{
// //         console.log('a',a);
// //     };
// //     return inner;
// // }

// // console.log(outter());
// // // const anotherfun=outter()
// // // console.log(anotherfun());
// // // let s=0;
// // // function fun(){
// // //         console.log("hii");
// // //         s++;
// // //         if(s<=125){
// // //     return fun();}else{
// // //         console.log(s);
// // //         console.log(anotherfun());
// // //     }
    
// // // }
// // // fun();
// // console.log(0=="0");//loose equity
// // console.log(0==="0"); //strong equity

// function fizz(){
//     for(let i=1;i<=14;i++){
//         if(i%3==0 && i%5==0)
//             console.log("fizzbuzz");
//         else if(i%5==0)
//         console.log("fizz");
//     else if(i%3==0)
//         console.log("buzz");

//     }
// }
// //fizz();

// const myArray=[];
// const numbers=[1,2,3,4,5];
// const colors=new Array("green","red","blue");
// const las=numbers[0];

// colors.push("orange");
// colors.unshift("yellow");
// const fir=colors[colors.length-1];
// const f=colors[0];
// // console.log(las);
// // console.log(fir);
// // console.log(f);

// // colors.forEach(function(color)
// // {
// //     console.log(color);
// // }
// // )
// // for(const i of colors){
// //     console.log(colors.pop(i));
// // }
// // const result=colors.map((i)=>{
// //     console.log(i);
// // })

// // const result1=colors.map((i)=>{
// //     console.log();
// // // })
// // const s=colors.slice(1,4);
// // console.log(s)
// // console.log(colors)
// // const st=colors.splice(2,2,"white","darkblue");
// // console.log(colors)
// // //console.log(st);

// console.log("TYPEOF");


// const a=[1,2,3];
// console.log(typeof(a[0]));
// const b=[1,2,3];
// console.log(typeof(b));//tpeof works based on memory allocation.
// console.log()
// const c=[1,2,3];
// console.log(Array.isArray(c));// check whether it is arrays or not.


const person={fname:"gokul",age:18};
const p1={};
const p2=new Object;
const p3=Object.create(null);
console.log(person);
console.log(person.fname);
