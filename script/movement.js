export { move }

function move(direction) {
	const cells = Array.from(
		document.querySelectorAll('.main_gameboard_cellrow_cell')
	)
	const currentCell = cells.filter((cell) => cell.innerText === 'T')

	if (direction === 'up') {
		var nextCell = cells.filter((cell) => {
			if (
				parseInt(currentCell[0].getAttribute('row')) ===
					parseInt(cell.getAttribute('row')) + 1 &&
				parseInt(cell.getAttribute('col')) === 0
			) {
				console.log(cell)
				return cell
			}
		})

		console.log(nextCell)

		nextCell[0].innerHTML = 'T'
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

		nextCell[0].innerHTML = 'T'
		currentCell[0].innerText = ''
	}
}
