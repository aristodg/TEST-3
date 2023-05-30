var sleepES5 = function(ms){
    var esperarHasta = new Date().getTime() + ms;
    while(new Date().getTime() < esperarHasta) continue;
};

function pruebaES5(){
    console.log('Inicio de la función de prueba.');
    sleepES5(3000);    //Dormimos la ejecución durante 3 segundos
    console.log('Fin de la función de prueba.');
};