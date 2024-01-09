function add(num1,num2)
{
    return num1+num2;
}
function mul(num1,num2)
{
    return num1*num2;
}

function subract(num1,num2)
{
    return num1-num2;
}
function calculator(num1,num2,operator){
    return operator(num1,num2);

}
console.log(calculator(5,6,add));
console.log(calculator(6,9,mul));
console.log(calculator(9,8,subract));

