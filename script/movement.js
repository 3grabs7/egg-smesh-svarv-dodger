export { move, updateBoard }
import { objectArray } from './loadgameboard.js'

function move(direction) {
	const cells = Array.from(
		document.querySelectorAll('.main_gameboard_cellrow_cell')
	)
	console.log(cells)
	const currentCell = cells.filter((cell) => cell.innerText === 'P')

	if (direction === 'up') {
		var nextCell = cells.filter((cell) => {
			if (
				parseInt(currentCell[0].getAttribute('row')) ===
					parseInt(cell.getAttribute('row')) + 1 &&
				parseInt(cell.getAttribute('col')) === 0
			) {
				return cell
			}
		})
		nextCell[0].innerHTML = 'P'
		currentCell[0].innerText = ''
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
