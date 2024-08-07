import { Address } from "./address";

export class User{
    public name:string;
    public age?:number;
    public phone?:number;
    public address?:Address;
    constructor(name:string){
        this.name=name;
    }
}