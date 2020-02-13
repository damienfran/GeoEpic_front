

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




    // u_id:number;
    // username:string;
    // password:string;
    // is_Manager:boolean;

    // constructor(u_id:number, username:string, password:string, is_Manager:boolean){
    //     this.u_id = u_id;
    //     this.username = username;
    //     this.password = password;
    //     this.is_Manager = is_Manager;
    // }
}