/*
let numbers = []

function generateAndInsert() {
    let random = Math.floor(Math.random()*10) + 1
    if (!numbers.includes(random)) {
        numbers.push(random)
        console.log(numbers)
    } else {
        console.log("he generado un número repetido")
    }
}

let tick = setInterval(generateAndInsert,1000)
*/

/*
indexOf({number:8, times: 3})
findIndex(e => e.number == 8)
*/

let numbers = []
function generateAndInsert() {
    let random = Math.floor(Math.random()*10) + 1
    //hay en el array algún objeto cuyo atributo number sea igual al random???
    if (numbers.find(e => e.number == random)) {
        //incrementar su contador
        let index = numbers.findIndex(e => e.number == random)
        numbers[index].times++
    } else {
        //no lo ha encontrado, por lo que añadimos un nuevo objeto para ese random
        numbers.push({
            number: random,
            times: 1
        })
    }
    console.table(numbers)
}
let tick = setInterval(generateAndInsert,100)