var hector = {
    nombre: 'Héctor',
    apellido: 'Vega',
    edad: 30    ,
    ingeniero: false,
    cocinero: false,
    cantante: true,
    dj: false,
    guitarrista: false,
    drone: true
}

var juan = {
    nombre: 'Juan',
    apellido: 'Gómez',
    edad: 13
}

function imprimirProfesiones(persona) {
    console.log(`${persona.nombre} es:`)
    if (persona.ingeniero) {
        console.log('Ingeniero')
    } else {
        console.log('No es ingeniero')
    }

    if (persona.cocinero) {
        console.log('Cocinero')
    }

    if (persona.cantante) {
        console.log('Cantante')
    }

    if (persona.dj) {
        console.log('DJ')
    }

    if (persona.guitarrista) {
        console.log('Guitarrista')
    }

    if (persona.drone) {
        console.log('Vuela drone')
    }
}

const MAYORIA_DE_EDAD = 18

imprimirProfesiones(hector)

/* const esMayorDeEdad = function (persona) {
    return persona.edad >= MAYORIA_DE_EDAD
} */

const esMayorDeEdad = ({ edad }) => edad >= MAYORIA_DE_EDAD
const esMenorDeEdad = ({ edad }) => !esMayorDeEdad({ edad })

function imprimirSiEsMayorDeEdad(persona) {
    if (esMayorDeEdad(persona)){
        console.log(`${persona.nombre} es mayor de edad`)
    } else {
        console.log(`${persona.nombre} es menor de edad`)
    }
}

imprimirSiEsMayorDeEdad(hector)
imprimirSiEsMayorDeEdad(juan)

function permitirAcceso(persona) {
    if (esMenorDeEdad(persona)) {
        console.log('ACCESO DENEGADO')
    } else {
        console.log('ACCESO PERMITIDO')
    }
}



