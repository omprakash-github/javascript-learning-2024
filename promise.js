prom=new Promise((resolve,reject)=>{
    const statement=false;
    if(statement)
    {
        resolve("malai tmro banauna  payau");
    }
    else
    {
        reject("malai timi man parana hai");

    }

})
prom.then((message)=>{
    console.log(message);
}).catch((message)=>{
    console.log(message)
}).finally("tmi ghar jada hunxa hai");