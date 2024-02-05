// new Promise(function(resolve,reject){
//   setTimeout(() => {
//     console.log("some promised is done");
//   }, 2000);
//   resolve();
// }).then(function(){
//   console.log("promised is solved hai");
// })
// const promise =new Promise(function(resolve,reject){
//   setTimeout(()=>{
//     console.log("hello this is assync task hai");
//     resolve({name:"omprakashlamichhane"});
//   },4000)
// })
// promise.then(function(user)
// {
//   console.log(user);
//   console.log("this is the resolve statement hai dost")
// })
const promiseFour=new Promise(function(resolve,reject)
{
  setTimeout(function(){
    let error=true;
    if(error)
    {
      resolve({username:"omprakash lamichhane",password:"123"});
    }
    else{
      reject('error something went wrong');
    }
  },1000)
})
promiseFour.then((user)=>{
  console.log(user);
  return user.username

}).then((username)=>{
  console.log(username);
}).catch(function(error){
  console.log(error);
}).finally(()=>console.log("the promise is finally resolve or rejected hai"));

const promiseFive=new Promise(function(resolve,reject){
  setTimeout(function(){
    let error=true;
    if(!error){
      resolve({username:"javascript",password:"123"})

    }
    else{
      reject('ERROR:JS went wrong');
    }
    
  }, 1000)
});

async function consumepromiseFive(){
  const response=await promiseFive;
  console.log(response);
}
consumepromiseFive();