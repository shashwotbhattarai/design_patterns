export class MyClass {
	filed: {
		number: Number[];
		ob: {
			name: string;
			size: string;
		};
	};

	constructor(field: any) {
		this.filed = field;
	}

	shallowClone() {
		return Object.assign({}, this);
	}

	deepClone() {
		return JSON.parse(JSON.stringify(this));
	}
}
