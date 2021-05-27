export { move, updateBoard }
import { objectArray } from './loadgameboard.js'

function move(direction) {
	const currentCell = objectArray.filter((cell) => cell.type === 'Player')[0]

	if (direction === 'up') {
		let destinationCell
		if (currentCell.row === 0) {
			destinationCell = objectArray.filter(
				(cell) => cell.row === 8 && cell.col === 0
			)[0]
		} else {
			destinationCell = objectArray.filter(
				(cell) => cell.row === currentCell.row - 1 && cell.col === 0
			)[0]
		}

		destinationCell.type = 'Player'
		destinationCell.icon = '🎾'
		destinationCell.cell.innerHTML = destinationCell.icon
		currentCell.type = 'empty'
		currentCell.icon = ''
		currentCell.cell.innerHTML = currentCell.icon
		return
	}

	if (direction === 'down') {
		let destinationCell
		if (currentCell.row === 8) {
			destinationCell = objectArray.filter(
				(cell) => cell.row === 0 && cell.col === 0
			)[0]
		} else {
			destinationCell = objectArray.filter(
				(cell) => cell.row === currentCell.row + 1 && cell.col === 0
			)[0]
		}

		destinationCell.type = 'Player'
		destinationCell.icon = '🎾'
		destinationCell.cell.innerHTML = destinationCell.icon
		currentCell.type = 'empty'
		currentCell.icon = ''
		currentCell.cell.innerHTML = currentCell.icon
		return
	}
}

function updateBoard() {
	const cellCount = objectArray.length
	for (let i = 0; i < cellCount; i++) {
		objectArray[i].update()
	}
}
