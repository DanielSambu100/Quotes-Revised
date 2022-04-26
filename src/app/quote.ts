export class Quote {
    id:number;
    name:string;
    title:string;
    details:string;
    author:string;

    constructor(id:number, name:string, title:string, details:string, author:string){
     this.id=id;
     this.name=name;
     this.title=title;
     this.details=details;
     this.author=author;   
    }
}
