var hector = {
    nombre: 'Héctor',
    apellido: 'Vega',
    edad: 30
}

var dario = {
    nombre: 'Darío',
    apellido: 'Susnisky',
    edad: 27
}

function imprimirNombreEnMayusculas({ nombre }) {
    console.log(nombre.toUpperCase())
}

imprimirNombreEnMayusculas(hector)
imprimirNombreEnMayusculas(dario)
//imprimirNombreEnMayusculas({ nombre: 'Pepito' })
imprimirNombreEnMayusculas({ apellido: 'Gomez' })