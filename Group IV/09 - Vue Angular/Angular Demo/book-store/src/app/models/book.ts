export class Book {
    private title:string;
    private author:string;
    private coverUrl:string;
    constructor(title:string, author:string, coverId:string){
        this.title = title;
        this.author = author;
        this.coverUrl = "http://covers.openlibrary.org/b/id/" + coverId + "-S.jpg";
    }
}
