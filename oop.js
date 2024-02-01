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
person.prototype.calAge=function()
{
  return 2019-1000;
}
omprakashDetail.calAge();
//prototype bata chai bahira bata function halna sakinxa hai tai nai ho concept aru khai hoina sathi
console.log(person.prototype);
console.log(omprakashDetail.calAge());
console.log(omprakashDetail.__proto_==person.prototype);
//yasma chai object bata linxa hai scope changing jastai raxa
