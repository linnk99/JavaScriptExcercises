class Persona {
    constructor(nombre, apellido, edad, altura) {
        //console.log('Me ejecutaron')
        this.nombre = nombre
        this.apellido = apellido
        this.edad = edad
        this.altura = altura
        // implicito return this
    }

    saludar (fn) {
        /* var nombre = this.nombre
        var apellido = this.apellido */
        var {  nombre, apellido  } = this

        console.log(`Hola, me llamo ${nombre} ${apellido} y tengo ${this.edad} años`)
        if (this.altura > 1.8) {
            console.log('¡Además soy una persona alta!')
        } else {
            console.log('¡Además no soy una persona alta!')
        }
        if (fn) {
            fn(nombre, apellido/* , false */)
        }
    }

    soyAlto () {
        return this.altura > 1.8
    }
}


class Desarrollador extends Persona {
    constructor(nombre, apellido, altura) {
        super(nombre, apellido, altura)
        /* this.nombre = nombre
        this.apellido = apellido
        this.altura = altura */
    }

    saludar(fn) {
        var {  nombre, apellido  } = this

        console.log(`Hola, me llamo ${this.nombre} ${this.apellido} y soy Desarrollador/a`)
        if (fn) {
            fn(nombre, apellido, true)
        }
    }
}

function responderSaludo(nombre, apellido, esDev) {
    console.log(`Buen día ${nombre} ${apellido}`)
    if (esDev) {
        console.log(`Ah mira, no sabía que eras desarrollador/a`)
    }
}


var hector = new Persona('Héctor', 'Vega', 30, 1.9)
var erika = new Persona('Erika', 'Luna', 33, 1.7)
var arturo = new Desarrollador('Arturo', 'Martínez', 33, 1.82)

hector.saludar()
erika.saludar(responderSaludo)
arturo.saludar(responderSaludo)

/* hector.soyAlto()
erika.soyAlto()
arturo.soyAlto() */