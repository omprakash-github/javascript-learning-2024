// new Promise(function(resolve,reject){
//   setTimeout(() => {
//     console.log("some promised is done");
//   }, 2000);
//   resolve();
// }).then(function(){
//   console.log("promised is solved hai");
// })
const promise =new Promise(function(resolve,reject){
  setTimeout(()=>{
    console.log("hello this is assync task hai");
    resolve({name:"omprakashlamichhane"});
  },4000)
})
promise.then(function(user)
{
  console.log(user);
  console.log("this is the resolve statement hai dost")
})