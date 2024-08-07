import { Singleton } from "./singleton";

export function clientCode2() {
	const s1 = Singleton.getInstance;

	return s1;
}