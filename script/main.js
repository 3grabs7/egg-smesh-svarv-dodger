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
	const board = document.querySelector('.main_gameboard')
	let move = 0
	setInterval(function () {
		move -= 50
		board.style = `background-position:${move}px 0`
	}, 500)
})

document.addEventListener('keydown', (e) => {
	e.preventDefault()
	if (e.key === 'ArrowUp') {
		move('up')
		return
	}
	if (e.key === 'ArrowDown') {
		move('down')
		return
	}
})
