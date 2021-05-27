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
		if (this.col === 0 || this.nextCell === undefined) {
			return
		}

		if (this.nextCell.type === 'Player') {
			this.collision()
			return
		}

		this.nextCell.type = this.type
		this.nextCell.icon = this.icon
		this.nextCell.cell.innerHTML = this.nextCell.icon

		if (this.col === 19) {
			this.generate()
		}
	}

	generate() {
		const pick = Math.random() * 100
		if (pick < 50) {
			this.type = 'empty'
			this.icon = ''
			this.cell.innerHTML = this.icon
			return
		}
		if (pick >= 50 && pick < 70) {
			this.type = 'Ägg'
			this.icon = '🥚'
			this.cell.innerHTML = this.icon
			return
		}
		if (pick >= 70 && pick < 90) {
			this.type = 'Sten'
			this.icon = '🥌'
			this.cell.innerHTML = this.icon
			return
		}
		if (pick >= 90) {
			this.type = 'Svarv'
			this.icon = '🕳'
			this.cell.innerHTML = this.icon
			return
		}
	}
}
