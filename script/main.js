import Hud from './hud.js'
import { loadBoard, populateBoard, objectArray } from './loadgameboard.js'
import { move, updateBoard } from './movement.js'

window.addEventListener('DOMContentLoaded', () => {
	// init HUD
	const gameState = new Hud()

	loadBoard({ width: 20, height: 9, state: gameState })

	// find player
	objectArray.forEach((obj) => {
		if (obj.type === 'Player') {
			obj.cell.innerHTML = '🎾'
		}
	})

	populateBoard()

	// start game
	setInterval(updateBoard, 500)
	const board = document.querySelector('.main_gameboard')
	let move = 0
	setInterval(function () {
		move -= 12
		board.style = `background-position:${move}px 0`
	}, 120)
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
