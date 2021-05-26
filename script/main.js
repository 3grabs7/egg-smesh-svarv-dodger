import { loadBoard, populateBoard } from './loadgameboard.js'
import GameObject from './gameobject.js'
import { move } from './movement.js'

window.addEventListener('DOMContentLoaded', () => {
	loadBoard({ width: 20, height: 9 })
	populateBoard()
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
