// Turtle graphics library
// Made to look and feel similar to scratch

// DO NOT CHANGE THIS FILE
// unless you know what you're doing
// Add your code in script.js

// -------------------------------------------------------- //
/* These are your available blocks:
move
goTo
turn
pointInDirection
penDown
penUp
setPenColor
setPenSize
eraseAll
*/


// -------------------------------------------------------- //

// Variables
const SIZEX = 200, SIZEY = 200
let canvas = null
let ctx = null
let settings = {  // Default settings
	penIsDown: false,
	color: '#337755',
	x: 0, y: 0,
	penWidth: 2,
	direction: 0
}

function setup(newSettings) {
	if (!newSettings ) { throw new Error('Must use settings object') }
	settings = { ...settings, ...newSettings }
	if( !settings.canvas ) {
		throw new Error('Settings must have canvas property: { canvas: domElement } ')
	}
	if( typeof settings.canvas === 'string' ) {
		canvas = document.querySelector(settings.canvas)
	} else {
		canvas = settings.canvas
	}
	ctx = canvas.getContext('2d')
	ctx.strokeStyle = settings.color
	canvas.width = 2 * SIZEX
	canvas.height = 2 * SIZEY
	ctx.lineWidth = settings.penWidth
	ctx = canvas.getContext("2d");
	ctx.translate(SIZEX, SIZEY)
}


function inPath(doStuff) {
	ctx.beginPath()
	ctx.strokeStyle = settings.color
	ctx.lineWidth = settings.penWidth
	ctx.moveTo(settings.x, settings.y)
	doStuff()
	ctx.stroke()
}
function move(distance) {
	let rad = (settings.direction - 90) * Math.PI / 180
	let dx = distance * Math.cos(rad)
	let dy = distance * Math.sin(rad)
	goTo(settings.x + dx, settings.y + dy)
}
function goTo(x, y) {
	if (settings.penIsDown) {
		inPath(() => {
			ctx.lineTo(x, y)
		})
	}
	settings.x = x
	settings.y = y
}
// TODO arc here
function turn(degrees) {
	settings.direction = (settings.direction + degrees) % 360
}
function pointInDirection(degrees) {
	// Scratch calculates degrees from 12 o'clock, clockwise.
	// Trigonometric functions calculate from 3 o'clock, counter-clockwise.
	// We compensate for this both here and in the "move" function.
	settings.direction = (degrees) % 360
}
function penDown() { settings.penIsDown = true }
function penUp() { settings.penIsDown = false }
function setPenColor(color) {
	settings.color = color
	ctx.strokeStyle = settings.color
}
function setPenSize(size) {
	settings.penWidth = size
}
function eraseAll() {
	ctx.beginPath()
	ctx.clearRect(-SIZEX, -SIZEY, 2 * SIZEX, 2 * SIZEY);
	ctx.closePath()
}


function start(myBlock) {
	console.log('** Turtle graphics: starting **')
	myBlock()
}

export default { setup, move, goTo, turn, pointInDirection, penDown, penUp, setPenColor, setPenSize, eraseAll, start }
