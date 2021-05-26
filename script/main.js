import { loadBoard, populateBoard, objectArray } from './loadgameboard.js'
import Cell from './cell.js'
import { move, updateBoard } from './movement.js'

window.addEventListener('DOMContentLoaded', () => {
	loadBoard({ width: 20, height: 9 })

	// Find player
	objectArray.forEach((obj) => {
		if (obj.type === 'Player') {
			obj.cell.innerHTML = 'P'
		}
	})
	populateBoard()

	setInterval(updateBoard, 300)
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
