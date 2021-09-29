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