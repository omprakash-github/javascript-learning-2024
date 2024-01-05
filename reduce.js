const num=[1,2,3,4,5,6,7,8,9,10];
const output =num.reduce((accumlator,current)=>{
   return accumlator+current;

},10)
console.log(output)

const cartItems = [
    {   
        productName : "ORice",
        productPrice : 350,
        qty : 4,
        haha : 'hehe',
        huhu : "haha"

    },
    {   
        productName : "momo",
        productPrice : 2,
        qty : 4,
        haha : 'hehe',
        huhu : "haha"

    },
    {   
        productName : "chowmein",
        productPrice : 2,
        qty : 4,
        haha : 'hehe',
        huhu : "haha"

    },
    {   
        productName : "ORice",
        productPrice : 350,
        qty : 4,
        haha : 'hehe',
        huhu : "haha"

    },
    {   
        productName : "ORice",
        productPrice : 350,
        qty : 4,
        haha : 'hehe',
        huhu : "haha"

    },
    {   
        productName : "ORice",
        productPrice : 350,
        qty : 4,
        haha : 'hehe',
        huhu : "haha"

    }
    
 ]
 const filtercart=cartItems.filter((key)=>{
  return (key.productPrice >360 || key.productName=="momo");
//  })
 console.log(filtercart);
const totalprice =cartItems.reduce((acc ,value)=>{
  return acc+value.qty;
},0)
console.log(totalprice);
const newCartItem=cartItems.map((key)=>{
    return {
        name:key.productName,
        qty:key.qty,
        Poductprice:key.productPrice,
    }
})
console.log(newCartItem);

const numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const even=numbersArray.filter((key)=>{
  return key%2===0;
});

const squarenumber=even.map((key)=>{
  return key*key;
})
const addnumber=numbersArray.reduce((accumlator,currentvalue)=>{
    return accumlator+currentvalue
})
console.log("the number that have sum is",addnumber);
console.log("the number is :",squarenumber)
console.log("hence the even number is",even);