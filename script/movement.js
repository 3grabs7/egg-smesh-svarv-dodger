export { move, updateBoard }
import { objectArray } from './loadgameboard.js'

function move(direction) {
	const currentCell = objectArray.filter((cell) => cell.type === 'Player')[0]

	if (direction === 'up') {
		destinationCell = objectArray.filter(
			(cell) => cell.row === currentCell.row - 1 && cell.col === 0
		)[0]
		destinationCell.type = 'Player'
		destinationCell.icon = '🎾'
		destinationCell.cell.innerHTML = destinationCell.icon
		currentCell.type = 'empty'
		currentCell.icon = ''
		currentCell.cell.innerHTML = currentCell.icon
		return
	}

	if (direction === 'down') {
		var destinationCell = cells.filter((cell) => {
			if (
				parseInt(currentCell[0].getAttribute('row')) ===
					parseInt(cell.getAttribute('row')) - 1 &&
				parseInt(cell.getAttribute('col')) === 0
			) {
				console.log(cell)
				return cell
			}
		})

		console.log(destinationCell)

		destinationCell[0].innerHTML = 'P'
		currentCell[0].innerText = ''
	}
}

function updateBoard() {
	const cellCount = objectArray.length
	for (let i = 0; i < cellCount; i++) {
		objectArray[i].update()
	}
}
