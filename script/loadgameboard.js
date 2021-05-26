export { loadBoard, populateBoard }

import GameObject from './gameobject.js'

function loadBoard({ width, height }) {
	const main = document.querySelector('.main')

	const gameBoard = document.createElement('div')
	gameBoard.className = 'main_gameboard'

	for (let i = 0; i < height; i++) {
		let row = document.createElement('div')
		row.className = 'main_gameboard_cellrow'
		for (let j = 0; j < width; j++) {
			let column = document.createElement('div')
			column.className = 'main_gameboard_cellrow_cell'
			column.setAttribute('row', `${i}`)
			column.setAttribute('col', `${j}`)
			if (i == Math.floor(height / 2) && j == 0) {
				column.innerHTML = 'T'
			}
			row.appendChild(column)
		}

		gameBoard.appendChild(row)
	}

	main.appendChild(gameBoard)
}

function populateBoard() {
	// sten, svarv, ägg
	let objectCount = [10, 5, 20]

	const cells = Array.from(
		document.querySelectorAll('.main_gameboard_cellrow_cell')
	)

	while (objectCount[0] + objectCount[1] + objectCount[2] > 0) {
		const obj = Math.floor(Math.random() * objectCount.length)
		const currentCell = Math.floor(Math.random() * cells.length)

		if (
			cells[currentCell].getAttribute('col') == 0 ||
			cells[currentCell].getAttribute('col') == 1
		) {
			continue
		}

		if (obj === 0) {
			if (cells[currentCell].innerHTML === '' && objectCount[0] > 0) {
				cells[currentCell].innerHTML = 'S'
				objectCount[0]--
			}
		}
		if (obj === 1) {
			if (cells[currentCell].innerHTML === '' && objectCount[1] > 0) {
				cells[currentCell].innerHTML = 'SV'
				objectCount[1]--
			}
		}
		if (obj === 2) {
			if (cells[currentCell].innerHTML === '' && objectCount[2] > 0) {
				cells[currentCell].innerHTML = 'Ä'
				objectCount[2]--
			}
		}
	}
}
