function Persona(nombre, apellido, edad, altura) {
    //console.log('Me ejecutaron')
    this.nombre = nombre
    this.apellido = apellido
    this.edad = edad
    this.altura = altura
    // implicito return this
}

Persona.prototype.saludar = () => {
    console.log(`Hola, me llamo ${this.nombre} ${this.apellido} y tengo ${this.edad} años`)
    /* if (this.altura > 1.8) {
        console.log('¡Además soy una persona alta!')
    } else {
        console.log('¡Además no soy una persona alta!')
    } */
}

Persona.prototype.soyAlto = () => this.altura > 1.8

var hector = new Persona('Héctor', 'Vega', 30, 1.9)
var erika = new Persona('Erika', 'Luna', 33, 1.7)
var arturo = new Persona('Arturo', 'Martínez', 33, 1.82)

/* hector.saludar()
erika.saludar()
arturo.saludar() */

hector.soyAlto()
erika.soyAlto()
arturo.soyAlto()