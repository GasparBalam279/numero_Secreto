let numSecreto = 0;
let intentos = 0;
let listaNumSorteados = [];
let numMaximo = 10; // Ctrl + F para buscar cosas en tu codigo
//console.log(numSecreto);

function asignarElemento(elemento,texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}


function verificarIntento(){
    let numeroUsuario = parseInt(document.getElementById('valorUsuario').value); // Se usa parseInt () para covertir el valor dentro en un tipo int en lugar del strin predetermindo
    //console.log(intentos);

    if (numeroUsuario === numSecreto){
        asignarElemento('p',`Acertaste el numero en ${intentos} ${(intentos === 1) ? 'intento' : 'intentos'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');

    }else{ //No acierta
        if (numeroUsuario>numSecreto){
            asignarElemento('p', 'El numero es menor');
        }else{
            asignarElemento('p', 'El numero es mayor');
        }

        intentos++;
        limpiarCaja();
    }
    return;
}

function limpiarCaja(){
    document.querySelector('#valorUsuario').value = '';
    //let valorCaja = document.querySelector('#valorUsuario');
    // valorCaja.value = ''; es lo mismo que la linea 31
    
}


function numAleatorio() {
    let numGenerado = Math.floor(Math.random()*numMaximo)+1;
    //console.log(numGenerado);
    //console.log(listaNumSorteados);
    //Si ya sorteamos todos los numeros aleatorios
    if (listaNumSorteados.length==numMaximo){
        asignarElemento('p','Ya se sortearon todos los numeros posibles')
    }else{
        // Si el numero generado aparece en la lista 
        if (listaNumSorteados.includes(numGenerado)) { //si el numero aleatorio esta incluido en la lista
        return numAleatorio();//Vuelves a generar el numero aleatorio
        }else{
            listaNumSorteados.push(numGenerado); //ponlo en la lista
            return numGenerado;//retorna ese numero al juego
        }
    }
}


function condicionesIniciales(){
    asignarElemento('h1', 'Juego del numero secreto');
    asignarElemento('p', `Indica un numero del 1 al ${numMaximo}`);
    numSecreto = numAleatorio();
    intentos = 1;
    //console.log(numSecreto);
}


function reiniciarJuego() {
    // limpiar caja
    limpiarCaja();
    // Mensaje inicial (Juego y numero del 1 - 10)
    // Generar nuevo numero aleatorio
    // Reiniciar numero de intnetos
    condicionesIniciales();
    // Deshabilitar el boton de nuebo juegos
    document.querySelector('#reiniciar').setAttribute('disabled', 'true');
}

condicionesIniciales();


  /*
  En function verificarIntento()
    console.log(numSecreto); // Se ve en la consola el numero secreto que genera la maquina
    console.log(typeof(numSecreto)); // Se ve el tipo de tado del numero secreto (int)
    console.log(numeroUsuario); // Se ve en la consola el numero de usuario
    console.log(typeof(numeroUsuario)); // Se ve el tipo de dato que es el numero del usuario (int)
    console.log(numSecreto === numeroUsuario); // Se hace una comparacion booleana (true/false) y si es el mismo tipo de datos con el tercer '='
    return; 
    */