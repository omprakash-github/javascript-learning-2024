const stockmarket={
    name:"lbbl",
    ltp:570,
    about:function()
    {
        console.log("the book close of the stock is in 2080-09-19",this.name);
    }
};
const stockmarket1={
    name:"GBBL",
    ltp:580,
};
stockmarket.about.call(stockmarket1);
console.log(stockmarket1.about);