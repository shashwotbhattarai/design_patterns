import { clientCode1 } from "./client1";
import { clientCode2 } from "./client2";

export function checkSingleton() {
	const s1 = clientCode1();
	const s2 = clientCode2();
	if (s1 == s2) {
		console.log("singleton valid");
	} else {
		console.log("not valid");
	}
}
checkSingleton()