export default class Cell {
	constructor({ type, icon, row, col, cell, nextCell }) {
		this.type = type
		this.icon = icon
		this.row = row
		this.col = col
		this.cell = cell
		this.nextCell = nextCell
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

	update() {
		console.log(this.type)
		if (this.col === 8) {
			return
		}

		if (this.nextCell != undefined && this.type === 'Player') {
			this.nextCell.type = this.type
			this.nextCell.icon = this.icon
			this.nextCell.cell.innerHTML = this.nextCell.icon
		}
		console.log(this.type)
	}
}
