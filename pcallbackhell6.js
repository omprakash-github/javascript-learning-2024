function bank(callback){
    setTimeout(()=>{
               const bankbalance=5000;
              
               callback(bankbalance);

    },2000)
}
function momo(money,callback)
{
    setTimeout(()=>{
        console.log("momo ko paisa 1000 ho hai dai");
        const momo=1000;
        const bakipaisa=money-momo;
        callback(bakipaisa);

    },2000)
}
function print(bakipaisa,callback){
    setTimeout(()=>{
 console.log("tmro print garna bhai jamma 1000 lagxa hai");
 const print=1000;
 const jammapaisa=bakipaisa-print;
 callback(jammapaisa);

    },2000);
}
function pen(bakipaisa,callback){
    setTimeout(()=>{
 console.log("pen  ko bhai jamma 1000 lagxa hai");
 const pen=1000;
 const jammapaisa=bakipaisa-pen;
 callback(jammapaisa);

    })
}
function copy(bakipaisa,callback){
    setTimeout(()=>{
 console.log("pen  ko bhai jamma 1000 lagxa hai");
 const copy=2000;
 const jammapaisa=bakipaisa-copy;
 callback(jammapaisa);

    })
}










bank((money)=>{
      console.log("ma sanga bank ma jamma ",money,"raixa");
      momo(money,(bakipaisa)=>{
           console.log("aba ma sanga chai baki=",bakipaisa);
           print(bakipaisa,(paisa)=>{
            console.log("aba jamma paisa hamro ",paisa);
            pen(paisa,(ababakipaisa)=>{
               console.log("ababaki paisa jamma hamro",ababakipaisa);
               copy(ababakipaisa,(ababakipaisa)=>{
                console.log("ababaki paisa jamma hamro",ababakipaisa);
             })
            })

          })
      })
    
})
