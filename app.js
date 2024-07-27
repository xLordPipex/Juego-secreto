let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;

console.log(numeroSecreto);

function asignarTextoElemento(eLemento, texto) {
    let elementoHTML = document.querySelector(eLemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento(){
    let numeroDeUsusario = parseInt(document.getElementById('valorUsuario').value);

    if (numeroDeUsusario === numeroSecreto) {
        asignarTextoElemento('p',`Acertaste el numero en ${intentos} ${(intentos === 1) ? 'vez' : 'veces'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        //El usuario no acerto
        if (numeroDeUsusario > numeroSecreto) {
            asignarTextoElemento('p','El numero secreto es menor');
        } else {
            asignarTextoElemento('p','El numero secreto es mayor');
        }
        intentos++;
        limpiarCaja();
    }
    return;
}

function limpiarCaja() {
   document.querySelector('#valorUsuario').value = '';   
}

function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;  
    
    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);
    //Si ya sorteamos tods los numeros
    if (listaNumerosSorteados.length == numeroMaximo) {
        asignarTextoElemento('p','Ya se sortearon todos los numeros posibles');
    } else {
        //si el numero generado esta incluido en la lista 
        if (listaNumerosSorteados.includes(numeroGenerado)) {
            return generarNumeroSecreto();
        } else {
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
}

function condicionesIniciales() {
    asignarTextoElemento('h1','Juego del numero secreto!');
    asignarTextoElemento('p',`Indica un numero del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}

function reiniciarJuego() {
    //limpar caja
    limpiarCaja();
    //Indicar mensaje de intervalo de numeros 
    //generar numero aleatorio
    //Inicializar el numero de intentos
    condicionesIniciales();
    //deshabilitar boton de nuevo juego
document.querySelector('#reiniciar').setAttribute('disabled','true');
    
}

condicionesIniciales();