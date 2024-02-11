// async function student()
// {
//    console.log("my name is omprakash lamichhane");
//    await console.log("my name is prakash lamichahne");
//    console.log("my name  is tikaram lamichhane");
// }
// student();
// console.log("my name is sarada lamichhane");
// console.log("my name is paltan lamichhane");
// async function count()
// {
//     console.log("1");
//     console.log("2");
//     console.log("3");
//     await console.log("4");
//     console.log("5");
//     console.log("6");
// // }
// console.log("async rw await lai chai majala bugna parxa la guys aru ma bugauxu");
// count();
// console.log("i ma 8 hai tw guys ");
// async function count()
// {
//     console.log("1");
//     await console.log("yo chai network request ho hai");
//     console.log("1");
//     console.log("2");
//     console.log("5");
//     console.log("6");
  
// }
// console.log("my name is omprakash lamichahne");
// count();
// console.log("my name is prakash lamichahne");
const name=new Promise(function(resolve,reject)
{
    const game=true;
    setTimeout(()=>{

        if(game)
        {
            resolve("aajha game cricket xa hai");
            se
        }
        else
        {
            reject("aajha game cancell vayo hai");
        }
    },2000);
})
name.then(function(message){
    console.log(message);
}).catch(()=>{
    console.log("k xa kbr guys");

}).finally(function()
{
    console.log("game vayo hai");
})