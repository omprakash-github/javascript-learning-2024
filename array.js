const fruits = ["Banana", "Orange", "Apple", "Mango"];
const fruits1=fruits.toString()
console.log(fruits,fruits1);
let fruits2=fruits.at(3);
console.log(fruits2);
let fruit3=fruits.join("+");
console.log(fruit3)
const fruit5=fruits.shift();
console.log(fruits);

fruits.forEach((key,index)=>{
    console.log(key,index);
})