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

function imprimirNombreEnMayusculas(persona) {
    // var nombre = persona.nombre
    var { nombre } = persona
    console.log(nombre.toUpperCase())
}

imprimirNombreEnMayusculas(hector)
imprimirNombreEnMayusculas(dario)
//imprimirNombreEnMayusculas({ nombre: 'Pepito' })
//imprimirNombreEnMayusculas({ apellido: 'Gomez' })

function imprimirNombreYEdad (persona) {
    //Hola, me llamo Sacha y tengo 28 años
    //Hola, me llamo Darío y tengo 28 años
    var { nombre } = persona, { edad } = persona
    console.log(`Hola, me llamo ${nombre} y tengo ${edad} años`)
}

imprimirNombreYEdad(hector)
imprimirNombreYEdad(dario)