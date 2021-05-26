import Cell from './cell.js'

export { loadBoard, populateBoard, objectArray }

let objectArray = []

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
			row.appendChild(column)

			let newCell = new Cell({
				type: 'empty',
				icon: '',
				row: i,
				col: j,
				cell: column,
			})
			objectArray.push(newCell)
			if (j > 0) {
				newCell.nextCell = objectArray[objectArray.length - 2]
			}

			if (i == Math.floor(height / 2) && j == 0) {
				objectArray[objectArray.length - 1].type = 'Player'
				objectArray[objectArray.length - 1].icon = '🎾'
				objectArray[objectArray.length - 1].innerHTML = '🎾'
			}
		}
		gameBoard.appendChild(row)
	}
	main.appendChild(gameBoard)
}

function populateBoard() {
	// sten, svarv, ägg
	let objectCount = [10, 5, 20]

	while (objectCount[0] + objectCount[1] + objectCount[2] > 0) {
		const obj = Math.floor(Math.random() * objectCount.length)
		const currentCell = Math.floor(Math.random() * objectArray.length)

		if (
			objectArray[currentCell].cell.getAttribute('col') == 0 ||
			objectArray[currentCell].cell.getAttribute('col') == 1
		) {
			continue
		}

		if (obj === 0) {
			if (
				objectArray[currentCell].cell.innerHTML === '' &&
				objectCount[0] > 0
			) {
				objectArray[currentCell].icon = '🥌'
				objectArray[currentCell].type = 'Sten'
				objectCount[0]--
			}
		}
		if (obj === 1) {
			if (
				objectArray[currentCell].cell.innerHTML === '' &&
				objectCount[1] > 0
			) {
				objectArray[currentCell].icon = '🕳'
				objectArray[currentCell].type = 'Svarv'
				objectCount[1]--
			}
		}
		if (obj === 2) {
			if (
				objectArray[currentCell].cell.innerHTML === '' &&
				objectCount[2] > 0
			) {
				objectArray[currentCell].icon = '🥚'
				objectArray[currentCell].type = 'Ägg'
				objectCount[2]--
			}
		}
	}
}
