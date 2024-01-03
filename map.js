const number=[4,16,36,49,64];
const square=number.map((key)=>{
    return key*key;
});
console.log(square);

const sqrtt=number.map(Math.sqrt);
console.log(sqrtt);
const persons = [
    {firstname : "Malcom", lastname: "Reynolds"},
    {firstname : "Kaylee", lastname: "Frye"},
    {firstname : "Jayne", lastname: "Cobb"}
  ];
  const personname=persons.map((item,index,pp)=>{
    return [item.firstname,item.lastname].join(" ");

  })

  console.log(personname);