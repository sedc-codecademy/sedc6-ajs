export class Book {
    private title:string;
    private author:string;
    private coverId:string;
    constructor(title:string, author:string, coverId:string ){
        this.title = title;
        this.author = author;
        this.coverId = "http://covers.openlibrary.org/b/id/"+coverId+"-S.jpg";
    }
}
