//yo cahi aauta constructor function ho yasla chai hamlai k garxa vane function ko through 
//hamlai object banauna help garxa new yauta construtor ho nai  yasre pani object banauna sakinaxa hai guiys 



function Student(name, year, day, birthday) {
    this.name = name;
    this.year = year;
    this.day = day;
    this.birthday =birthday;
}


studentDetail=new Student("prakash",2078,20,[58,98,78])
console.log(studentDetail);


function car(carName,manufacture,what)
{
    this.carName=carName;
    this.manufacture=manufacture;
    this.what=what;
    this.about=function()
    {
        console.log("my manufacture is from india");
    }
};

const cardetail=new car("bmw","india","omprakash");
console.log(cardetail.about());