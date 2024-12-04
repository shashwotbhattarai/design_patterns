interface ButtonFunctions{
    pressButton():string;

}

class IOSButton implements ButtonFunctions {

    public pressButton(){
        return "ios buttton pressed";

    }
}

class AndroidButton implements ButtonFunctions {
    public pressButton(){
        return "android buttton pressed";

    }
}

export class ButtonFactory {
	createButton(os: string):AndroidButton|IOSButton {
		if (os=="ios"){
            return new IOSButton()
        }else{
            return new AndroidButton()
        }
	}
}
