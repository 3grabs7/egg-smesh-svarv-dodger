export default class GameObject {
	constructor(type) {
		this.type = type
	}

	collision() {
		switch (this.type) {
			case 'Sten':
				console.log('-hp auch')
				break
			case 'Svarv':
				console.log('you dead')
				break
			case 'Ägg':
				console.log('smesh')
				break
		}
	}
}
