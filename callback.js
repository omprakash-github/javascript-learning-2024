function sum(a,b)
{
    setTimeout()
    {()=>
        {

            console.log(a+b);
        },2000

    }
}
function calculator(a,b,callback)
{
      callback(a,b);
}
//call back ma chai hamla functon call garna hunna hai
calculator(4,5,sum);