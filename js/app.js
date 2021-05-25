
function sumar(){
    const forma = document.getElementById('forma');
    let operandoA = forma['operandoA'];
    let operandoB = forma['operandoB'];
    let resultado = parseFloat(operandoA.value) + parseFloat (operandoB.value);
    if(isNaN(resultado)){
        resultado = "La operacion no incluye numeros";
    }

    document.getElementById("resultado").innerHTML = `
        El resultado es de: ${resultado}`

    console.log(`El resultado es de: ${resultado}`)
}
function restar(){
    const forma = document.getElementById('forma');
    let operandoA = forma['operandoA'];
    let operandoB = forma['operandoB'];
    let resultado = parseFloat(operandoA.value) - parseFloat (operandoB.value);
    if(isNaN(resultado)){
        resultado = "La operacion no incluye numeros";
    }
    document.getElementById("resultado").innerHTML = `
        El resultado es de: ${resultado}`

    console.log(`El resultado es de: ${resultado}`)
}
function multiplicar(){
    const forma = document.getElementById('forma');
    let operandoA = forma['operandoA'];
    let operandoB = forma['operandoB'];
    let resultado = parseFloat(operandoA.value) * parseFloat (operandoB.value);
    if(isNaN(resultado)){
        resultado = "La operacion no incluye numeros";
    }

    document.getElementById("resultado").innerHTML = `
        El resultado es de: ${resultado}`

    console.log(`El resultado es de: ${resultado}`)
}

function dividir(){
    const forma = document.getElementById('forma');
    let operandoA = forma['operandoA'];
    let operandoB = forma['operandoB'];
    let resultado = parseFloat(operandoA.value) / parseFloat (operandoB.value);
    if(isNaN(resultado)){
        resultado = "La operacion no incluye numeros";
    }

    document.getElementById("resultado").innerHTML = `
        El resultado es de: ${resultado}`

    console.log(`El resultado es de: ${resultado}`)
}

function potencia(){
    const forma = document.getElementById('forma');
    let operandoA = forma['operandoA'];
    let operandoB = forma['operandoB'];
    let resultado = parseFloat(operandoA.value) ** parseFloat (operandoB.value);
    if(isNaN(resultado)){
        resultado = "La operacion no incluye numeros";
    }

    document.getElementById("resultado").innerHTML = `
        El resultado es de: ${resultado}`

    console.log(`El resultado es de: ${resultado}`)
}