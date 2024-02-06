const ticket =new Promise(function(resolve,reject){
const ticket=false;
if(ticket)
{
    resolve("you have the ticket");
}
else{
    reject("you donot have the ticket");
    
}
})

ticket.then((data)=>{
    console.log("satte check:",data);//then ma chai hamro resolve ko aayxa hai 
}).catch((data)=>{
console.log("you donot have the ticket",data);//catck ma chai rejct ko data aauxa hai;
}).finally(()=>{
    console.log("ma chai jun ma ne chalxu");
})