//16

for (var i = 100; i >= 0; i--) {
    console.log(i);
}


//17

const squart = (a,b)=> a**2;

//18
//let nombre = prompt("Ingrese un nombre");
const saludos = (nombre) => `Hola ${nombre}`;

//19
//max - min +1 * min
const numeroAleatorio = ()=> Math.floor(Math.random()*(100-1)+1);


const jugar = ()=>{
    let contador = 0;
    alert("Ustedes debe ingresar un numero para adivinar entre 1 y 100");
    let adivinar = 3;
    
    for (let i = 5; i > 0; i--) {
        let respuesta = parseInt(prompt("Ingrese el numero: "));
        
        if (respuesta === adivinar){
            alert("Usted adivino el numero"); 
            break; 
        }else{
            alert(`Usted no adivinó el numero, le quedad , ${i-1} intentos`);
        }
        contador+=1
        if (contador === 5 && respuesta != adivinar){
            alert("Perdiste bro")} 
    }
        
}