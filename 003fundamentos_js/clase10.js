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

imprimirProfesiones(hector)

function imprimirSiEsMayorDeEdad(persona) {
    if (persona.edad >= 18){
        console.log(`${persona.nombre} es mayor de edad`)
    } else if (persona.edad > 18) {
        console.log(`${persona.nombre} es menor de edad`)
    } else {
        console.log(`La edad de ${persona.nombre} no tiene sentido...`)
    }
}

imprimirSiEsMayorDeEdad(hector)
imprimirSiEsMayorDeEdad(juan)