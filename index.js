//1 - Nombre pairs

var i
var somme = 0

for (i = 11; i < 47; i++) {
    if (i % 2 === 0) {
        somme = somme + i
    }
}
console.log(somme + "\n")

//2 - Nombre impairs

var i 
var somme = 0

for (i = 109; i < 588; i++) {
    if (i % 2 !== 0) {
        somme = somme + i
    }
}
console.log(somme + "\n")

//3 - Puissance et racine carrée

var numbers = [1, 2, 3, 4, 5]
var squares = []
var roots = []
var i

for (i = 0; i < numbers.length; i++){
    squares[i] = 2 ** numbers[i]
}
console.log(squares)

for (i = 0; i < squares.length; i++){
    roots[i] = Math.floor(Math.sqrt(squares[i]))
}
console.log(roots  + "\n")

//4 - Table de multiplication v1

var i 

for (i = 0; i <= 10; i++) {
    console.log(`3 x ${i} = ${i*3}`)
}
console.log("\n")

//5 - Table de multiplication v2

var i
var j

for (i = 0; i <= 10; i++) {
    for (j = 0; j <= 10; j++) {
        console.log(`${i} x ${j} = ${i * j}`)
    }
}
console.log("\n")

//6 - Factorielle v1

var i
var j = 7
var result = 1

for (i = 1; i <= j; i++) {
    result = result * i
}
console.log(result + "\n")

//7 - Factorielle v2

var j = 8
var k
var result = 1

for (k = 0; k <= j; k++) {
    if (k == 0 || k == 1) {
        result = 1
    } else {
        result = result * k
    }

    console.log(k + "! = " + result)
}
console.log("\n")

//8 - Somme des carrés

var i 
var result = 0

for (i = 5; i <= 10; i++) {
    result = result + i * i
}
console.log (result + "\n")

//9 - Comptons

var max = 1000
var min = 100
var count = 0

while (min != max) {
    if (max % 7 == 0) {
        count++
    }
    max--
}
console.log(count + "\n")

//10 - Chanceux

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
console.log("\n")

//11 - Des boites

// Box1 + box2 : 1er boucle: 10 
// Box1 + box2 2e boucle : 34
// Box1 : 17
// Box2 : 30
// i : 14

//12 - D'autres boites

// 1er tour Box 1 : 12
// 2e tour : 24
// 3e tour : 33
// 4e tour : 39
// 5e tour : 42
// box1 : 42
// i : 0

//13 - Encore des boites

// i = 
0
box2 = 4
3
box1 = -1
-3
box2 = 5
2
box1 = -2
-2
box2 = 5
-4

//Mega Bonus - Armstrong Number

var i
var j
var k
var total = 0
var Armstrong = 0
for (i = 0; i <= 9; i++) {
    for (j = 0; j <= 9; j++) {
        for (k = 0; k <= 9; k++) {
            total = i * 10**2 + j * 10 + k
            if (i != 0) {
                Armstrong = i**3 + j**3 + k**3
            } else if (j != 0 ){
                Armstrong = j**2 + k**2
            } else {
                Armstrong = k**1
            }
            if (total == Armstrong) {
                console.log(total)
            }
        }
    }
}
console.log("\n")

//Mega Bonus 2 - Armstrong Number

var i
var j
var k
var l
var total = 0
var Armstrong = 0
for (l = 0; l <= 9; l++) {
    for (i = 0; i <= 9; i++) {
        for (j = 0; j <= 9; j++) {
            for (k = 0; k <= 9; k++) {
                total = l* 10**3 + i * 10**2 + j * 10 + k
                if (l != 0) {
                    Armstrong = l**4 + i**4 + j**4 + k**4
                } else if (i != 0) {
                    Armstrong = i**3 + j**3 + k**3
                } else if (j != 0 ){
                    Armstrong = j**2 + k**2
                } else {
                    Armstrong = k**1
                }
                if (total ==  Armstrong) {
                    console.log(total)
                }
            }
        }
    }
}