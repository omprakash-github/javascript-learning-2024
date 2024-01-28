// function sum(a,b)
// {
//     setTimeout()
//     {()=>
//         {

//             console.log(a+b);
//         },2000

//     }
// }
// function calculator(a,b,callback)
// {
//       callback(a,b);
// }
// //call back ma chai hamla functon call garna hunna hai
// calculator(4,5,sum);
// function oddorEven(number,callback)
// {
//     const result=(number%2==0)?"even":"odd";
//     callback(number,result);
// }
// oddorEven(28,(number,result)=>{
//     console.log(number + 'is '+result);
// })


// function one(fn)
// {
//     fn();
// console.log("hello ji i am omprakash lamichanne");
// }
// // function two()
// // {
// // console.log("hello i am function two hai");
// // }
// one(()=>{
// console.log("ompakash");
// });

function add(a,b)
{
    console.log("the sum of a +b is",a+b);
}
function subract(a,b)
{
    console.log("the subract of a-b is",a-b);
}
function calculator(a,b,add,subract)
{
   add(a,b);
   subract(a,b);
}
calculator(15,20,add,subract);