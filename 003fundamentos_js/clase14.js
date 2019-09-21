var hector = {
    nombre: 'Héctor',
    apellido: 'Vega',
    edad: 30,
    peso: 96
}

console.log(`Al inicio del año ${hector.nombre} pesa ${hector.peso}kg`)

/* function aumentarDePeso(persona) {
    return persona.peso += 200
} */
const INCREMENTO_PESO = 0.3
const DIAS_DEL_ANO = 365
const comeMucho = () => Math.random() < 0.3
const realizaDeporte = () => Math.random() < 0.4

const aumentarDePeso = persona => persona.peso += INCREMENTO_PESO
const adelgazar = persona => persona.peso -= INCREMENTO_PESO

const META = hector.peso - 3
var dias = 0

while (hector.peso > META) {
    if (comeMucho()) {
        aumentarDePeso(hector)
    }
    if (realizaDeporte()) {
        adelgazar(hector)
    }
    dias++
}

/* for (var i = 1; i <= DIAS_DEL_ANO; i++) {
    var random = Math.random()

    if(random < 0.25) {
        aumentarDePeso(hector)
    } else if (random < 0.5 ) {
        adelgazar(hector)
    }
} */

console.log(`Pasaron ${dias} hasta que ${hector.nombre} adelgazó`)