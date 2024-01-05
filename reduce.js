const num=[1,2,3,4,5,6,7,8,9,10];
const output =num.reduce((accumlator,current)=>{
   return accumlator+current;

},10)
console.log(output)