import { Address } from "./address";
import { UserBuilder } from "./userBuilder";

export function client() {
    const user1= new UserBuilder("ram").build();
    console.log(user1);
    const user2=new UserBuilder("shyam").setAge(23).setPhone(9874123652).build();
    console.log(user2);
    const user3=new UserBuilder("hari").setAge(54).setPhone(1236547898).setAddress(new Address(5454,"sukdhara")).build();
    console.log(user3);
}

