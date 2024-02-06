function bank(callback)
{
      setTimeout(()=>{
        const bankkopaisa="2000";
        console.log("mero bank ma " ,bankkopaisa,"raixa ");
        callback(bankkopaisa);

      },2000);
}
function momo(paisa,callback)
{
    setTimeout(()=>{
           const momo=180;
           const bakipaisa =paisa-momo;
           console.log("ma sanga aba baki ",bakipaisa,"xa");
           callback(bakipaisa);
    },2000)
}



bank((bankkopaisa)=>{
    console.log("maila bank bata paisa jikya ");
   momo(bankkopaisa,(bakipaisa)=>{
    console.log("ma sanga aba jamma bakipaisa xa",bakipaisa);
   })

})