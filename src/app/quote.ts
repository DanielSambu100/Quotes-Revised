export class Quote {
    // id:number;
    // name:string;
    // title:string;
    // details:string;
    // author:string;

    showInfo:Boolean;
    constructor(public id:number, public name:string, public title:string, public details:string, public author:string){
     this.showInfo=false;   
    //  this.id=id;
    //  this.name=name;
    //  this.title=title;
    //  this.details=details;
    //  this.author=author;   
    }
}
