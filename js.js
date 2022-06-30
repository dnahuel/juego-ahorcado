const section1= document.getElementById('section-1');
const section2= document.getElementById('section-2');
const section3= document.getElementById('section-3');
const contenedor= document.getElementById('contenedor');


const btnIniciar=document.getElementById('iniciar');
const btnAgregarPalabra=document.getElementById('agregar');

const btnAgregar=document.getElementById('aceptar');
const btnVolver=document.getElementById('volver');



const inputPalabras=document.getElementById('palabaraAgregada');

section3.className='ocultar';

const contenedorInput = document.createElement('div'); 
    contenedorInput.type = 'div'; 
    contenedorInput.id='contenedorinput'  ;
    contenedor.appendChild(contenedorInput);



const contenedorBtn = document.createElement('div'); 
    contenedorBtn.type = 'div'; 
    contenedorBtn.id='contenedorbtn'  ;
    contenedor.appendChild(contenedorBtn);    


const divAyuda=document.getElementById('ayuda');

divAyuda.className='ocultar';
const btnSi= document.getElementById('si');
const btnNo= document.getElementById('no');

btnSi.addEventListener('click',()=>{
    divAyuda.className='ocultar';
});

btnNo.addEventListener('click',()=>{
    divAyuda.className='ocultar';
});





const divGanar=document.getElementById('ganar');
divGanar.className='ocultar';

const btnOk=document.getElementById('ok');
btnOk.addEventListener('click',()=>{
    divGanar.className='ocultar';
    contenedorBtn.className='';
    nuevaPartida()
});


const divPerder=document.getElementById('perder');
divPerder.className='ocultar';

const btnOkPerder=document.getElementById('ok2');
btnOkPerder.addEventListener('click',()=>{
    divPerder.className='ocultar';
    contenedorBtn.className='';
    nuevaPartida()
});





const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");
//linea base
context.lineWidth = 5;
context.strokeStyle = '#000000';
context.beginPath();
context.moveTo(1, 339);
context.lineTo(591, 345);
context.stroke();
context.closePath();

section2.className='ocultar';

btnIniciar.addEventListener('click',()=>{
    section1.className='ocultar';
    section2.classList.remove('ocultar');
    section2.className='section2';
});

btnAgregarPalabra.addEventListener('click', ()=>{
    section1.className='ocultar';
    section3.classList.remove('ocultar');
    section2.className='ocultar';
})

btnAgregar.addEventListener('click',()=>{
    if (inputPalabras.value.length<=12 && inputPalabras.value!=""){
       e=inputPalabras.value.toUpperCase()
       
        palabra.push(e);
       section3.className='ocultar';
       section2.classList.remove('ocultar');
       section2.classList='section2';
       section1.className='ocultar';
       iniciarJuego();
    }else{
        alert("palabra mayor a 12 caracteres")
        inputPalabras.value=""
    }
});
btnVolver.addEventListener('click',()=>{
    
       section2.className='ocultar';
       section1.classList.remove('ocultar');
       section3.className='ocultar';
});





function agregarBtnAyudita(letra,clase){
    const button = document.createElement('button'); 
    // button.type = 'button'; 
    // button.innerText = letra; 
    
    // button.className=clase;   
    // contenedorBtn.appendChild(button);
    // button.addEventListener('mouseover',()=>{
   
    //     button.innerText='Ayudita ;)'
    // });
    // button.addEventListener('mouseout',()=>{
        
    //     button.innerText='Ayudita :)'
    // })

    button.addEventListener('click',()=>{
   
        divAyuda.className='ayuda';
        restaurarBotones();
       
    })

}
function agregarBoton(letra,clase) { 
    const button = document.createElement('button'); 
    button.type = 'button'; 
    button.innerText = letra; 
   // button.onclick=click;
    button.className=clase;   
    contenedorBtn.appendChild(button);
    button.addEventListener('click',(e)=>{
    
    if(e.originalTarget.firstChild.data=='Desistir :('){
        nuevaPartida();
        section2.className='ocultar';
        section1.classList.remove('ocultar');
      
    }
    if(letra!='Nuevo Juego' && letra!='Desistir :('){    

        button.className='btnOcupado';
        button.disabled=true;
        let estado=buscarLetra(palabra[index],letra);
        if(!estado){
            if(errores>=7){
                
                divPerder.className='perder';
            }
            errores++;
            dibujar();
        
            
        }else{
            
            
            
            if(aciertos>=palabra[index].length){
                divGanar.className='ganar';
                contenedorBtn.className='ocultar';
            }
        }
    }else{
        if(letra=='Nuevo Juego'){
        nuevaPartida();
        
        
    }}
    
    });
    
    
} 

function agregarInput(text) { 
    for(let i=0; i<text.length;i++){
    const entrada = document.createElement('input'); 
    entrada.type = 'input'; 
    entrada.id=i;
  
    entrada.disabled=true;
    entrada.className='inputPalabras';   
    contenedorInput.appendChild(entrada);
        
    };
  
    
    
} 

function eliminaInput(){
    
    let hijos=contenedorInput.children;
    let cantidad=contenedorInput.children.length;
    
    for(let h=0; h<cantidad;h++)
    {
        contenedorInput.removeChild(hijos[0]);
    }
      
}

function restaurarBotones(){
    
    let hijos=contenedorBtn.children;
    let cantidad=contenedorBtn.children.length;
    
    for(let h=0; h<cantidad;h++)
    {
        contenedorBtn.removeChild(hijos[0]);
    }
    agregaBtnLetras();
    agregarBtnAyudita('Ayudita :)','btnAyuda');
    agregarSalto()
    agregarBoton('Nuevo Juego','btnOpciones');
    agregarBoton('Desistir :(','btnOpciones');
}



function buscarLetra(text, caracter){
    let existe=false;
    for(let l=0; l<text.length;l++){
    
        if(text[l]===caracter){
        const letra=document.getElementById(""+l);
        letra.value=text[l];
        
            existe=true;
            aciertos++;
        }
           
    }
    return existe;
 
}

function agregarSalto(){
    let salto = document.createElement('br'); 
    salto.type = 'br';
    contenedorBtn.appendChild(salto)
}

function numeroAleatorio(max){
    return Math.floor((Math.random() * (max - 0 + 1)) + 0);
}





function dibujar(){
    

    if(errores==1){
    //linea 1
        context.strokeStyle = '#000000';
        context.beginPath();
        context.moveTo(114, 34);
        context.lineTo(114, 343);
        context.stroke();
        context.closePath();
    }

    if(errores==2){
    //linea 2
    context.strokeStyle = '#000000';
    context.beginPath();
    context.moveTo(269, 37);
    context.lineTo(114, 37);
    context.stroke();
    context.closePath();
     //linea soga
     context.strokeStyle = '#000000';
     context.beginPath();
     context.moveTo(266, 37);
     context.lineTo(266, 58);
     context.stroke();
     context.closePath();
    }

    
    if(errores==3){
    //cabeza
        context.fillStyle="#000000";
        context.save();
        context.translate(266.5, 97.5);
        context.scale(1, 0.9354838709677419);
        context.beginPath();
        context.arc(0, 0, 42, 0, 6.283185307179586, false);
        context.fill();
        context.closePath();
        context.restore();
}

    if(errores==4){
    //linea cuerpo
        context.strokeStyle = '#000000';
        context.beginPath();
        
        context.moveTo(266, 137);
        context.lineTo(266, 222);
        context.stroke();
        context.closePath();
    }

    if(errores==5){
    //linea brazo derecho
        context.strokeStyle = '#000000';
        context.beginPath();
        context.moveTo(267, 137);
        context.lineTo(308, 171);
        context.stroke();
        context.closePath();
    }
    //linea brazo izquierdo
    if(errores==6){
    context.strokeStyle = '#000000';
    context.beginPath();
    context.moveTo(265, 136);
    context.lineTo(221, 172);
    context.stroke();
    context.closePath();
    }
    if(errores==7){
    //linea pierna izquierda
    context.strokeStyle = '#000000';
    context.beginPath();
    context.moveTo(267, 221);
    context.lineTo(231, 242);
    context.stroke();
    context.closePath();
    }
    if(errores==8){
    //linea pierna derecha
    context.strokeStyle = '#000000';
    context.beginPath();
    context.moveTo(266, 220);
    context.lineTo(304, 239);
    context.stroke();
    context.closePath();
    }
    

    


}

function agregaBtnLetras(){
    let contador=1;
    const letras=['A','B','C','D','E',
                   'F','G','H','I','J',
                   'K','L','M','N','Ñ',
                   'O','P','Q','R','S',
                   'T','U','V','W','X',
                   'Y','Z'  
                ];
    letras.forEach(element => {
            agregarBoton(element,'btnLetras');
            if(contador==6){
                agregarSalto();
                contador=0;
            }
            contador++;
        
    
        
    });
    }



function nuevaPartida(){
    iniciarJuego();
        restaurarBotones();
        canvas.width=canvas.width;
        //linea base
        context.lineWidth = 5;
        context.strokeStyle = '#000000';
        context.beginPath();
        context.moveTo(1, 339);
        context.lineTo(591, 345);
        context.stroke();
        context.closePath();
}


let errores=0; 
let aciertos=0;

let palabra=['ARCHIPIELAGO','CASA','OREJA','AUTOMOTOR','MONITOR','SALTAR'];

let index=numeroAleatorio(palabra.length-1);

agregarInput(palabra[index]);


agregaBtnLetras();
//agregarBtnAyudita('Ayudita :)','btnAyuda');
agregarSalto()
agregarBoton('Nuevo Juego','btnOpciones');
agregarBoton('Desistir :(','btnOpciones');




function iniciarJuego(){
    errores=0; 
    aciertos=0
    index=numeroAleatorio(palabra.length-1);
    eliminaInput();
    agregarInput(palabra[index]);


}