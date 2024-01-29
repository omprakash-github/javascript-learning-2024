"suse strict";

const person = function (firstname, Lastname) {
  this.firstname = firstname;
  this.Lastname = Lastname;
  //this la chai object return garxa hai
  //function vitra function lai methid vanenxa hai

  //never do this
//   this.calAge = function () {
//     console.log(2000 - 19980);
//   };
};
const omprakashDetail = new person("omprakash", "lamichhane");
console.log(typeof omprakashDetail, omprakashDetail);
const prakashDetail = new person("prakash", "lamichhane");
const tikaramDetail = new person("tikaram", "lamichhane");
console.log(prakashDetail, tikaramDetail, omprakashDetail.firstname);
console.log(prakashDetail instanceof person);
