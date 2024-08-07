import { Address } from "./address";
import { User } from "./user";

export class UserBuilder{
    public user:User
    constructor(name:string){
        this.user= new User(name);
        
    }
    setAge(age:number){
        this.user.age=age;
        return this;
    }
    setPhone(phone:number){
        this.user.phone=phone;
        return this;
    }
    setAddress(address:Address){
        this.user.address=address;
        return this;
    }
    build(){
        return this.user;
    }
}