let numero = prompt('2')

numero = Number(numero)

if (isNaN(numero)) {
    console.log('Por favor, insere um número valido.')
} else if (numero % 2 === 0) {
    console.log(`${numero} é par.`)
}else {
    console.log(`${numero} é ímpar.`)
}