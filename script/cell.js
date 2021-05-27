const hp = document.querySelector('#hp')
const score = document.querySelector('#score')

export default class Cell {
	constructor({ type, icon, row, col, cell, nextCell, state }) {
		this.type = type
		this.icon = icon
		this.row = row
		this.col = col
		this.cell = cell
		this.nextCell = nextCell
		this.state = state
	}

	collision() {
		switch (this.type) {
			case 'Sten':
				this.state.hp -= 5
				hp.innerHTML = this.state.hp
				break
			case 'Svarv':
				console.log('you dead')
				break
			case 'Ägg':
				this.state.score += 5
				score.innerHTML = this.state.score
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
		if (pick < 70) {
			this.type = 'empty'
			this.icon = ''
			this.cell.innerHTML = this.icon
			return
		}
		if (pick >= 70 && pick < 85) {
			this.type = 'Ägg'
			this.icon = '🥚'
			this.cell.innerHTML = this.icon
			return
		}
		if (pick >= 85 && pick < 95) {
			this.type = 'Sten'
			this.icon = '🥌'
			this.cell.innerHTML = this.icon
			return
		}
		if (pick >= 95) {
			this.type = 'Svarv'
			this.icon = '🕳'
			this.cell.innerHTML = this.icon
			return
		}
	}
}
