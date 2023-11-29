function validacionRespuesta(pregunta, respuestaCorrecta){
    let respuesta = prompt(pregunta).toUpperCase();

    while(respuesta !== "A" && respuesta !== "B" && respuesta !== "C"){
        alert("Respuesta invalida responder por A, B o C");
        respuesta = prompt(pregunta).toUpperCase();
    }

    if(respuesta === respuestaCorrecta){
        alert("Respuesta correcta.");
    } else {
        alert("Respuesta incorrecta");
    }   
}

let nombre = prompt("Ingrese su nombre:").toUpperCase();
alert(`Bienvenido ${nombre} al trivia de preguntas!!`);

let tematica = prompt("Elija una tematica:(responder por A, B o C) \nA. Matematica\nB. Historia\nC .Geografia").toUpperCase();

while(tematica !== "A" && tematica !== "B" && tematica !== "C"){
    alert("Respuesta invalida");
    tematica = prompt("Elija una tematica:(responder por A, B o C) \nA. Matematica\nB. Historia\nC .Geografia").toUpperCase();
}

if(tematica === "A"){
    
    for (let i = 0; i <= 4; i++) {
        
        let pregunta;
        let respuestaCorrecta;

        switch(i) {
            case 1:
                pregunta = "¿Cuánto es el valor de pi?(responder por A, B o C): \nA. 1.88 \nB. 3.14 \nC. 3.17";
                respuestaCorrecta = "B";
                validacionRespuesta(pregunta, respuestaCorrecta);
                break;
            case 2:
                pregunta = "¿Cuánto es el resultado de: 132 + 17 x 2?(responder por A, B o C): \nA. 166 \nB. 298 \nC. 281";
                respuestaCorrecta = "A";
                validacionRespuesta(pregunta, respuestaCorrecta);
                break;
            case 3:
                pregunta = "¿Cuánto es el valor de 12^2?(responder por A, B o C): \nA. 144 \nB. 122 \nC. 224";
                respuestaCorrecta = "A";
                validacionRespuesta(pregunta, respuestaCorrecta);
                break;
            case 4:
                pregunta = "¿Cuántos lados tiene un eneagono?(responder por A, B o C): \nA. 7 \nB. 11 \nC. 9";
                respuestaCorrecta = "C";
                validacionRespuesta(pregunta, respuestaCorrecta);
                break;
            default:
                alert("Le realizaremos 4 preguntas de Matematicas.");
                break;
        }
    }

}else if (tematica === "B"){

    for (let i = 0; i <= 4; i++) {
        let pregunta;
        let respuestaCorrecta;

        switch(i) {
            case 1:
                pregunta = "¿En que año se descubrio America?(responder por A, B o C): \nA.1495  \nB. 1485 \nC. 1492";
                respuestaCorrecta = "C";
                validacionRespuesta(pregunta, respuestaCorrecta);
                break;
            case 2:
                pregunta = "¿Cuando comenzo la primera guerra mundial?(responder por A, B o C): \nA. 1914 \nB. 1918 \nC. 1945";
                respuestaCorrecta = "A";
                validacionRespuesta(pregunta, respuestaCorrecta);
                break;
            case 3:
                pregunta = "¿Cuando comenzo la revolucion francesa?(responder por A, B o C): \nA. 1799 \nB. 1786 \nC. 1789";
                respuestaCorrecta = "C";
                validacionRespuesta(pregunta, respuestaCorrecta);
                break;
            case 4:
                pregunta = "¿En que año se independizo la Argentina?(responder por A, B o C): \nA. 1820 \nB. 1810 \nC. 1816";
                respuestaCorrecta = "C";
                validacionRespuesta(pregunta, respuestaCorrecta);
                break;
            default:
                alert("Le realizaremos 4 preguntas de Historia.");
                break;
        }
    }

}else if (tematica === "C"){

    for (let i = 0; i <= 4; i++) {
        let pregunta;
        let respuestaCorrecta;

        switch(i) {
            case 1:
                pregunta = "¿Cual es la capital de Noruega?(responder por A, B o C): \nA. Dublin \nB. Ottawa \nC. Oslo";
                respuestaCorrecta = "C";
                validacionRespuesta(pregunta, respuestaCorrecta);
                break;
            case 2:
                pregunta = "¿Que paises limitan con Argentina?(responder por A, B o C): \nA. Chile, Brasil, Colombia, Uruguay y Paraguay \nB. Brasil, Bolivia, Chile, Paraguay y Uruguay \nC. Brasil, Uruguay, Bolivia, Ecuador y Paraguay";
                respuestaCorrecta = "B";
                validacionRespuesta(pregunta, respuestaCorrecta);
                break;
            case 3:
                pregunta = "¿En que continente se encuentra Uzbekistan?(responder por A, B o C): \nA. Asia \nB. Europa \nC. Oceania";
                respuestaCorrecta = "A";
                validacionRespuesta(pregunta, respuestaCorrecta);
                break;
            case 4:
                pregunta = "¿Cuantos continentes existen actualmente?(responder por A, B o C): \nA. 5 \nB. 6 \nC. 7";
                respuestaCorrecta = "C";
                validacionRespuesta(pregunta, respuestaCorrecta);
                break;
            default:
                alert("Le realizaremos 4 preguntas de Geografia.");
                break;
        }
    }
}

alert("Gracias por participar de la trivia.");


