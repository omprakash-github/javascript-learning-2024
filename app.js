const book =function (book_name,author,page)
{
        this.book_name=book_name;
        this.author=author;
        this.page=page;
        this;
       
};

let bookinfo=new book("prakash","stock market",150);
var bookinfo2=new book("rabindra","market",250);
console.log(bookinfo,bookinfo2);
console.log(new book("prakash lamichhane","maya ko pool",900));
