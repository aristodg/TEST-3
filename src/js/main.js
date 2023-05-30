var sleepES5 = function(ms){
    var esperarHasta = new Date().getTime() + ms;
    while(new Date().getTime() < esperarHasta) continue;
};

function pruebaES5(){
    console.log('Inicio de la función de prueba.');
    sleepES5(3000);    //Dormimos la ejecución durante 3 segundos
    console.log('Fin de la función de prueba.');
};

var sleep = function(ms){
    //Crea una promesa y la resuleve automáticamente con un timeout a los ms segundos
    return new Promise(resolve => setTimeout(resolve, ms));
};

async function pruebaES6(){
    console.log('Inicio de la función de prueba.');
    await sleep(3000);    //Dormimos la ejecución durante 3 segundos
    console.log('Fin de la función de prueba.');
};