console.log('Hey there!')

const input1 = document.getElementById('input1')
const box1 = document.getElementById('box1')
const box2 = document.getElementById('box2')
const formulario = document.getElementById('formulario')

//EVENTO CLICK: Registra acción click en un determinado elemento

input1.addEventListener('click', () => {
    console.log('Recibí un click');
})

//EVENTO FOCUS; Le presta atención a un objeto
input1.addEventListener('focus', () => {
    console.log('Me enfoqué en el input');
})

//EVENTO BLUR: Le quita la atención a un objeto
input1.addEventListener('blur', () => {
    console.log('Me separé del input');
})

//EVENTO MOUSEOVER: Cuando paso el puntero sobre el elemento
input1.addEventListener('mouseover', () => {
    console.log('Sobre el input');
})

//EVENTO MOUSEOUT: Cuando retiro el puntero del elemento
input1.addEventListener('mouseout', () => {
    console.log('Fuera del input');
})

//EVENTO KEYDOWN: Cuando presiono una tecla
document.addEventListener('keydown', (event) => {
    console.log(event);
    console.log(event.key);
    // console.log('Tecla presionada:' + event);
})

//EVENTO KEYUP: Cuando suelto una tecla
document.addEventListener('keyup', () => {
    console.log('Tecla suelta');
})


// OBJETOS //

const portatil = {
    altura: "20cm",
    color: "negro",
    procesador: "intel corei7"
}

const ventilador = {
    altura: "20cm",
    color: "negro", 
    potencia: "200W",
    helices: {
        tamaño: "10 cm",
        material: "plastico"
    }
}

// Añadir propiedad
ventilador.marca = 'kalley'

// Eliminar propiedad
delete ventilador.marca;

console.log(ventilador);

const procesadorUsuario = portatil.procesador

console.log(procesadorUsuario)
console.log(ventilador.helices.tamaño)

// ARREGLOS

const dias = [ 'Lunes', 'Miercoles', 'Jueves', 'Viernes' ]

console.log(dias[3], dias[4])

console.log(dias.length);

// PUSH: Añadir al final del arreglo
dias.push('Martes')

// POP: Remueve el último elemento del arreglo
dias.pop()

// UNSHIFT: Añadir al inicio del arreglo
dias.unshift('Domingo')

// SHIFT: Remueve el primer elemento del arreglo
dias.shift()

console.log(dias);

// CONSULTA LOS MÉTODOS:
// map, filter, slice, splice, reverse, sort, some, includes
