let horas=7;
let minutos=0;
let segundos= 0;
cargarsegundos();
cargarsegundos(minutos)
// ejecucion 
function cargarsegundos(){

    let txtsegundos;

 if(segundos <0){ 
   segundos = 59; 
  }




 // mostrar segundo en pantalla
 if(segundos < 10 ){
  txtsegundos = '59';

  }else{ txtsegundos =  segundos;
              }

  document.getElementById("segundos").innerHTML = txtsegundos;
 segundos --;
   cargarminutos(segundos);
}
 //ejecutar minutos
 function cargarminutos(segundos){}

  let txtminutos;
   if(segundos == -1 && minutos !== 0){  

               setTimeout(()=>  { 
                  minutos --;

              },500)
               }else if(segundos ==-1 && minutos ==0){
                   setTimeout(()=>{minutos = 59;

    },500)

    //windon
    if(minutos < 10){
      txtminutos = "0$(minutos)";
      }else{
                        txtminutos = minutos;
    }
      document.getElementById("minutos").innerHTML = txtminutos;
 
 }
  
 

 
  


  //cada segundo
   setInterval(cargarsegundos,1000)

