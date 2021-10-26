
const hombre = "H"
const mujer = "M"


class Persona {
    constructor(nombreParam, edadParam, DNI, peso, altura) {
        this.nombre = nombreParam,
        this.edad = edadParam,
        this.DNI = DNI,
        this.peso = peso,
        this.altuna = altura,
        this.sexo = "H"
    }
}

let persona1 = new Persona ("Paco", 40, "70958943K", 60 ,1.80)
let persona2 = new Persona ("Antonia", 20, "90876543M", 120 ,1.40)
let persona3 = new Persona ("Alfonso", 30, "89765892N", 80 ,1.50)

persona2.sexo = mujer;




















