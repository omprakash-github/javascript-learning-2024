//dom ma hamla k k garna sakinxa tw 
// dom ma getelementbyid rw getelementsbyid plural huxa;
// dom ma toggle la yadi add xaina vane add garne rw add xa vane hatune kam garxa
// dom ma classlist bata hamla class ko list haru harna sakinxa
// dom ma hamla class add remove garna sakkinxa
// dom ma hamla textmanuplation haru  easily garna sakinaxa
// dom ma htmlcollection rw nodelist hunxa 
// querySelectorAll la hamlai nodelist dinxa index ko adhar ma hamla manuplate garnxa sakinxa
// getattributes rw setattritues("paila","tobeadd") yasare hamla  add garna sakinxa hai




document.querySelector('.container').classList.add("container-2");
let con=document.querySelector('.container-2').style.backgroundColor="red";

let p=document.querySelector(".container > p");
p.style.backgroundColor="green"
p.style.fontSize="2rem";
p.style.color="white";

let li=document.querySelectorAll("li");
li[0].classList.add("box");
"strict"
