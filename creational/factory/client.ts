import { ButtonFactory } from "./factory"

export function clientCode(){
    const android= new ButtonFactory().createButton("android").pressButton();
    console.log(android);
    const ios=new ButtonFactory().createButton("ios").pressButton();
    console.log(ios);
}