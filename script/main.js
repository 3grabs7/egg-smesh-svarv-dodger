import { loadBoard, populateBoard, objectArray } from './loadgameboard.js'
import { move, updateBoard } from './movement.js'

window.addEventListener('DOMContentLoaded', () => {
	loadBoard({ width: 20, height: 9 })

	// Find player
	objectArray.forEach((obj) => {
		if (obj.type === 'Player') {
			obj.cell.innerHTML = '🎾'
		}
	})
	populateBoard()

	setInterval(updateBoard, 500)
})

document.addEventListener('keydown', (e) => {
	e.preventDefault()
	if (e.key === 'ArrowUp') {
		move('up')
	}
	if (e.key === 'ArrowDown') {
		move('down')
	}
})
