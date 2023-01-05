// SETUP CODE - DO NOT TOUCH
import T from './turtle.js'
import { drawA, drawL } from './examples.js'

// Default settings
T.setup({ canvas: 'canvas' })


// Setup user interaction
// The "start" function runs when the user clicks the "Run code" button and when the web page is loaded
document.querySelector('#btn-run').addEventListener('click', start)
document.querySelector('#btn-clear').addEventListener('click', clear)
start()

function clear() {
	console.log('Cleared canvas')
	T.eraseAll()
}
// END OF SETUP CODE
// -------------------------------------------------------- //
// Do whatever you want below here!



// This is your first block (function)
// Replace the code inside to get started!
function start() {
	console.log('script.js | Drawing "AA"')
	T.setPenColor('purple')
	T.setPenSize(3)
	T.penUp()
	T.goTo(-90, 20)

	drawL()
	drawA()
	drawL()
	drawA()

	T.goTo(-92, 30)
	T.penDown()
	// T.setPenColor('lightgreen')
	T.setPenColor('darkgreen')
	T.pointInDirection(90)
	T.move(160)
	// T.turn(45)
	// T.move(40)
}
