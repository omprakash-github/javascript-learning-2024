
function stockmarket1()
{
    console.log(`the name of ${this.stockname} and the sector is ${this.sector}`);
}


const stock={
    stockname: "gbbl",
    sector: "Developement bank",
    about: stockmarket1,
};

const stock2={
    stockname:"shivm",
    sector:"manufacture",
    about:stockmarket1,
};
stock.about();
stock2.about();//this la chai kunai pani object lai return garxa hai

// stock.about();
// stock2.about();