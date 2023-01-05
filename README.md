# Turtle graphics

Repot innehåller ett enkelt kodbibliotek för att rita vektorgrafik. Metoderna är avsedda att likna Scratch så mycket som möjligt. https://scratch.mit.edu/

## Quickstart
### Användning

1. Gör en fork av detta repo. (Eller klona repot och kopiera filerna till ett eget repo. Om du klonar, kan du inte pusha dina egna commits.)
2. Ändra i start-blocket i script.js


### Exempel användning
```js
// script.js
import T from './turtle.js'

// Tala om hur library ska hitta <canvas>. Samma syntax som querySelector
T.setup({ canvas: 'canvas' })

// Start-blocket (motsvarar gröna flaggan)
T.start(() => {
	T.setPenColor('purple')
	T.setPenSize(3)
	T.goTo(0, 0)

	// Redo att börja rita

})
```

---

## API-dokumentation
### Moving

`move(x)` flyttar sköldpaddan `x` steg i den riktning den pekar.

`goTo(x, y)` går till en specifik (x, y) koordinat. Mittpunkten är (0, 0) och både x och y går från -200 till +200. Övre vänstra hörnet har koordinaten (-200, -200).

`turn(degrees)` vrider sköldpaddan `degrees` grader medurs. 0 grader är rakt uppåt, 90 grader pekar åt höger.

`pointInDirection(degrees)` vrider sköldpaddan till en exakt position.

```js
// Exempel: ^
T.goTo(-50, 0)
T.pointInDirection(60)
T.move(100)
T.turn(60)
T.move(100)
```


### Pen
`penDown()` sätter ner pennan. När du använder `move` eller `goTo` kommer sköldpaddan att dra ett streck med vald färg.

`penUp()` lyfter upp pennan. Inga streck kommer att dras.

`setPenColor(color)` sätter vald färg till valfri CSS-färg.

`setPenSize(size)` sätter pennans storlek till ett antal pixlar.

`eraseAll()` rensar hela canvas.

```js
// Exempel
T.penDown()
T.penUp()
T.setPenSize(10)
T.setPenColor('#ff0000')
T.setPenColor('red')
T.eraseAll()
```


### JavaScript
När du skriver JavaScript kan du använda kommentarer, för att tala om vad koden gör. Webbläsaren hoppar över kommentarer när den kör koden.

```js
// Denna kommentar gäller bara för en rad.
/* Denna kommentar
löper över
flera rader. */
```

---

Skapa en **JavaScript-variabel** med `let` om den ska kunna ändras, `const` annars.

Ändra en variabels värde med likamed-operatorn: variabel = nya värdet. Det som står till höger om lika med-tecknet sparas i variabeln.

```js
const penWidth = 10
let counter = 1
counter = counter + 1
```

---

Använd `if` och `else` för **villkor**. Blockparenteserna `{ }` används för att tala om vad som ingår i if-blocket.

```js
if( counter == 1 ) {
	counter = counter + 1
	T.move(20)
}
if( counter < 10 ) {
	T.turn(5)
	T.move(5)
} else {
	T.turn(10)
	T.move(2.5)
}
```

---

**Upprepningar** kan göras med `for` eller `while`. Exempel:

```js
let loopCounter = 1
while( loopCounter < 4 ) {
	// Detta görs totalt 3 gånger
	T.move(10)
	T.turn(36)
	loopCounter = loopCounter + 1
}

// For-satsen är mera kompakt men gör samma sak som while-blocket ovan
for( let loopCounter = 1; loopCounter < 4; loopCounter = loopCounter + 1 ) {
	// Detta görs totalt 3 gånger
	T.move(10)
	T.turn(36)
}
```

---

Motsvarigheten till **block** heter **funktioner**.
```js
// Definiera ett block/funktion
function drawLine() {
	T.pointInDirection(45)
	T.penDown()
	T.move(20)
}

// Använda block / anropa funktionen
drawLine()
drawLine()
```
