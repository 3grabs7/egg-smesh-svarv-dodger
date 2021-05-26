export { move, updateBoard }
import { objectArray } from './loadgameboard.js'

function move(direction) {
	const currentCell = objectArray.filter((cell) => cell.type === 'Player')[0]

	if (direction === 'up') {
		nextCell = objectArray.filter((cell) => cell.col === currentCell.col + 1)[0]
		nextCell.type = 'Player'
		nextCell.icon = '🎾'
		nextCell.cell = currentCell.cell
	}

	if (direction === 'down') {
		var nextCell = cells.filter((cell) => {
			if (
				parseInt(currentCell[0].getAttribute('row')) ===
					parseInt(cell.getAttribute('row')) - 1 &&
				parseInt(cell.getAttribute('col')) === 0
			) {
				console.log(cell)
				return cell
			}
		})

		console.log(nextCell)

		nextCell[0].innerHTML = 'P'
		currentCell[0].innerText = ''
	}
}

function updateBoard() {
	objectArray.forEach((cell) => cell.update())
}
