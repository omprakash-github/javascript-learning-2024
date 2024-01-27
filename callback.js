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
function oddorEven(number,callback)
{
    const result=(number%2==0)?"even":"odd";
    callback(number,result);
}
oddorEven(28,(number,result)=>{
    console.log(number + 'is '+result);
})