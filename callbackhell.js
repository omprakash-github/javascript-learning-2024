const heading1=document.querySelector(".class-1");
const heading2=document.querySelector(".class-2");
const heading3=document.querySelector(".class-3");
const heading4=document.querySelector(".class-4");
setTimeout(()=>{
    heading1.innerHTML="omprakash lamichhane";
    heading1.style.color="red";
    setTimeout(()=>{
        heading3.innerHTML="omprakash lamichhane";
        heading3.style.color="red";
        setTimeout(()=>{
            heading2.innerHTML="omprakash lamichhane";
            heading2.style.color="red";
        },2000)
    },2000);
  
    
},2000)
setTimeout(()=>{
    heading5.innerHTML="omprakash lamichhane";
    heading5.style.color="red";
},6000)



