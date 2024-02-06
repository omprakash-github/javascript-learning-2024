// // console.log("hello");

// // setTimeout(function () {
// //     console.log("this will execute later");
// // }, 3000);

// // console.log("world");
// // console.log("three");

// function getCheese(callback) {
//     setTimeout(() => {
//         const cheese = "🧀";
//         console.log("here is cheese", cheese);
//         callback(cheese);
//     }, 2000);
// }

// function makeDough(cheese, callback) {
//     setTimeout(() => {
//         const dough = cheese + "🫓";
//         console.log("here is the dough", dough);
//         callback(dough);
//     }, 2000);
// }

// function bakePizza(dough, callback) {
//     setTimeout(() => {
//         const pizza = dough + "🍕";
//         console.log("here is the pizza", pizza);
//         callback(pizza);
//     }, 2000);
// }

// getCheese((cheese) => {
//     makeDough(cheese, (dough) => {
//         bakePizza(dough, (pizza) => {
//             console.log("got my pizza", pizza);
//         });
//     });
// });

function canteeen(callback)
{
    setTimeout(() => {
        const money="ma sanga 1000 rupiya xa hai dai";
        console.log("money",money);
        callback(money);

    }, 2000);
}
function chiya(money,callback)
{
    setTimeout(() => {
        const chiyapaisa="20";
        console.log("chiya ko paisa ",chiyapaisa);
        callback(chiyapaisa);
        

        
    }, 2000);
}
function churot(chaiyapaisa,callback)
{
    setTimeout(() => {
        const churot='surya curot';
        console.log("dai surya churot dunu na yll");
        callback(churot);
    }, 2000);
}



canteeen((money)=>{
    console.log(money);
   chiya(money,(chaiyapaisa)=>{
    console.log("chiya ko tw jamma 20 raixa yll");
    churot(chaiyapaisa,(churot)=>{
        console.log("churot ko lagi tw sathi ",churot);
    })

   })


})