import { Singleton } from "./singleton";

export function clientCode1() {
	const s2 = Singleton.getInstance;

	return s2;
}