export class Address{
    public street:string;
    public zip:number;
    constructor(zip:number,street:string){
        this.zip=zip;
        this.street=street;
    }
}