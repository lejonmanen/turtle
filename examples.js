import T from './turtle.js'

const letterSpacing = 10
const letterHeight = 60

function drawL() {
	// Make new functions to simplify the code in "start" above
	const lLength = letterHeight

	// Vertical line
	T.penUp()
	T.pointInDirection(0)
	T.move(lLength)
	T.penDown()
	T.move(-lLength)

	// Horizontal line
	T.turn(90)
	T.move(lLength / 2)

	// Prepare for next letter
	T.penUp()
	T.move(letterSpacing)
}

function drawA() {
	const slopeDegrees = 15
	const aLength = letterHeight / 0.966  // adjust height to be same as "L"
	const halfTurn = 180

	// The two long lines
	T.penDown()
	T.pointInDirection(slopeDegrees)
	T.move(aLength)
	T.turn(halfTurn - 2 * slopeDegrees)
	T.move(aLength)

	// Horizontal bar
	T.penUp()
	T.move(-aLength / 2)
	T.pointInDirection(-90)
	T.penDown()
	T.move(aLength / 4)
	T.penUp()
	T.move(-aLength / 4)

	T.pointInDirection(slopeDegrees + 150)
	T.move(aLength / 2)

	// Prepare for next letter
	T.pointInDirection(90)
	T.move(letterSpacing)
}

function test() {
	// Another example
	const Turtle = T
	Turtle.setPenColor('green')
	Turtle.penUp()
	Turtle.goTo(0, 0)
	Turtle.penDown()
	Turtle.goTo(0, 20)
	Turtle.move(50)
	Turtle.goTo(20, -20)
	Turtle.turn(180)
	Turtle.setPenColor('blue')
	Turtle.move(60)
	Turtle.setPenSize(6)
	Turtle.pointInDirection(30)
	Turtle.move(40)
	// Turtle.eraseAll()
	Turtle.pointInDirection(60)
	Turtle.move(40)
	Turtle.setPenColor('gold')
	Turtle.pointInDirection(-60)
	Turtle.move(40)
	Turtle.setPenSize(2)
	Turtle.turn(-30)
	Turtle.move(40)
	Turtle.turn(30)
	Turtle.move(40)
}

export { drawA, drawL, test }
