

export class Client{
    cId:number;
    username:string;
    password:string;
    score:number;
    manager:boolean;

    constructor(cId:number, username:string, password:string, score:number, manager:boolean){
        this.cId = cId;
        this.username = username;
        this.password = password;
        this.score = score;
        this.manager = manager;
    }


}