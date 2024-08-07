import { MyClass } from "./myClass";

export function client() {
	const input = {
		number: [1, 2, 3, 4],
		ob: {
			name: "asfsf",
			size: "xl",
		},
	};
	const object1 = new MyClass(input);
	console.log(`object1: ${JSON.stringify(object1)}`);

	const object2 = object1.shallowClone();
	console.log(`object2 shallow clone: ${JSON.stringify(object2)}`);

	object2.filed.ob.name = "updatedname";
	console.log(`After modifying object2's nested property:`);
	console.log(`object2 shallow clone: ${JSON.stringify(object2)}`);
	console.log(`object1: ${JSON.stringify(object1)}`);

	object1.filed.ob.name = "asfsf";


	const object3 = object1.deepClone();
	console.log(`object3 deep clone: ${JSON.stringify(object3)}`);

	object3.filed.ob.name = "anothername";
	console.log(`After modifying object3's nested property:`);
	console.log(`object3 deep clone: ${JSON.stringify(object3)}`);
	console.log(`object1: ${JSON.stringify(object1)}`);
}