//1 - Nombre pairs

var i
var somme = 0

for (i = 11; i < 47; i++) {
    if (i % 2 === 0) {
        somme = somme + i
    }
}
console.log(somme)

//2 - Nombre impairs

var i 
var somme = 0

for (i = 109; i < 588; i++) {
    if (i % 2 !== 0) {
        somme = somme + i
    }
}
console.log(somme)

//3 - Puissance et racine carrée

var numbers = [1, 2, 3, 4, 5]
var squares = []
var roots = []
var i

for (i = 0; i < 5; i++){
    squares[i] = 2 ** numbers[i]
}
console.log(squares)

for (i = 0; i < 5; i++){
    roots[i] = Math.floor(Math.sqrt(squares[i]))
}
console.log(roots)

//3 - Table de multiplication v1

var i 

for (i = 0; i <= 10; i++) {
    console.log(`3 x ${i} = ${i*3}`)
}

//4 - Table de multiplication v2

var i
var j

for (i = 0; i <= 10; i++) {
    for (j = 0; j <= 10; j++) {
        console.log(`${i} x ${j} = ${i * j}`)
    }
}

//5 - Factorielle v1

var i
var j = 7
var result = 1

for (i = 1; i <= j; i++) {
    result = result * i
}
console.log(result)

//5 - Factorielle v2

var i
var j = 8
var k
var result = 1

for (k = 0; k <= j; k++) {
    if (k == 0 || k == 1) {
        result = 1
    } else {
        result = result * k
    }

    console.log(result)
}

//6 - Somme des carrés

var i 
var result = 0

for (i = 5; i <= 10; i++) {
    result = result + i * i
}
console.log (result)

//7 - Comptons

var max = 1000
var min = 100
var count = 0

while (min != max) {
    if (max % 7 == 0) {
        count++
    }
    max--
}
console.log(count)

//8 - Chanceux

var min = 1
var max = 6
var i 
var result = 0
var dice = 0

for (i = 1; i <= 20; i++) {
    dice = Math.floor(Math.random() * (max - min + 1) + min)
    if (dice >= 5) {
        result = result + dice
    }
    console.log(i + " lancé " + dice + " resultat " + result)
}

//9 - Des boites

Box1 + box2 : 1er boucle: 10 
Box1 + box2 2e boucle : 34
Box1 : 17
Box2 : 30
i : 14