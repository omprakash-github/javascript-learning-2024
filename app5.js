const stockmarket={
    name:"lbbl",
    ltp:570,
    about:function(stock,ltp)
    {
        return`the book close of the stock is in 2080-09-19 ${this.name},${stock},${ltp}`;
    }
};
const stockmarket1={
    name:"GBBL",
    ltp:580,
};
stockmarket.about.call(stockmarket1);//call lai chai globally indicate garxa hai arko function ko chij sajilai aafno ma garna penxa
console.log(stockmarket.about.call(stockmarket1,"ahpc",590));

