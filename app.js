let p=document.querySelector("p").innerHTML;




const book =function (book_name,author,page)
{
        this.book_name=book_name;
        this.author=author;
        this.page=page;
      
       
};
book.prototype.work=function()
{
        return this.page;
}
book.prototype.publishedDate=1992;


let bookinfo=new book("prakash","stock market",150);
console.log("the working history is ",bookinfo.work(),"the publish date of the book is:",bookinfo.publishedDate);
console.log(bookinfo)
var bookinfo2=new book("rabindra","market",250);
console.log(bookinfo,bookinfo2);
console.log(new book("prakash lamichhane","maya ko pool",900));
console.log(bookinfo.book_name,bookinfo.author,bookinfo.page);

