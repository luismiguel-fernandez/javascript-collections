let words = ['bitcoin','ethereum','polkadot','Solana','cardano','TERRA']
let numbers = [ 123, 456 , 100, 11, 99 ]
let objects = [
    { car: 'tesla model 3', autonomy: 460 },
    { car: 'bmw i3', autonomy: 280 },
    { car: 'peugeot 3008', autonomy: 325 },
    { car: 'toyota prius', autonomy: 112 }
]

//1 mostrar words ordenado alfabeticamente AZ
    function ordenarAlfaAZ(a,b) {
        if (a.toLowerCase() < b.toLowerCase()) return -1
        else if (a.toLowerCase() > b.toLowerCase()) return 1
        else return 0
    }
    words.sort(ordenarAlfaAZ)


//2 mostrar words filtrado por el patron "er"
    let subcadena = "Er"
    words.filter( a => a.toLowerCase().includes(subcadena.toLowerCase()) )


//3 mostrar numbers ordenado numéricamente menor a mayor
    function ordenar2numeros(a,b) {
        if (a<b) return -1
        else if (b<a) return 1
        else return 0
    }
    numbers.sort(ordenar2numeros)


//4 mostrar numbers filtrado por ">100"
    numbers.filter( a => a > 100 )

//5 mostrar objects ordenados por "autonomy" mayor a menor
    function ordenarXautonomy(a,b) {
        if (a.autonomy < b.autonomy) return 1
        else if (a.autonomy > b.autonomy) return -1
        else return 0
    }
    objects.sort(ordenarXautonomy)


//6 mostrar objects ordenados por "car" alfabeticamente AZ
    function ordenarXcar(a,b) {
        if (a.car < b.car) return -1
        else if (a.car > b.car) return 1
        else return 0
    }
    objects.sort(ordenarXcar)


//7 mostrar objects filtrado por "autonomy" top3
         //devuelve un array ya ordenado
    let resultado = []
    for (let i=0; i<3; i++) {
        resultado.push(objects[i])
    }

    objects.slice().sort(ordenarXautonomy).slice(0,3)


