import { Component } from '@angular/core';

@Component({
  selector: 'app-parcial1',
  templateUrl: './parcial1.component.html',
  styleUrls: ['./parcial1.component.css']
})
export class Parcial1Component {



  contacto ={
    nombre: 'Febe Martinez',
    email: ''
  }



  nombre = 'Febe Martinez';
  apellido='Perez';
  edad:number = 15;
  empresa = 'Bac';
  documento = 'Otro';
  telefono = 'Otro';
  color = 'Rojo';
  genero = 'Femenino';
  estatura:number = 10;
  
 //Para los chekbox de seleccion de registrado o no 
  habilitar_input_property = true;
  usuario_registrado_porperty = false;
  habilitar_color_property= true;
  habilitar_estatura_property=true;
  habilitar_genero_property= true;
  texto_registro = 'No hay nadie registrado';

   //Para la seleccion de opciones
  seleccion ="Seleccione";
  
     //Para la introduccion de correo 
    correo='febemina@gmail.com';
  
   //Para la seleccion de carrera
    carrera='Ingenieria';

 //Para los chekbox de seleccion de genero
  genero_registrado_porperty = false;
  genero_registrado = 'Femenino';

   //Para el boton de cambiar color
  color_boton_property = "background-color: blue; color: white;";
  mensaje='';

  lanzar_mensaje(){
  // this.mensaje='Hola a todos';
   //alert(this.mensaje)
    if(this.color_boton_property=="background-color: blue; color: white;")
    {
    this.color_boton_property="background-color: red; color: white;";
    }else{
      this.color_boton_property="background-color: blue; color: white;";
    } 
  }



  contador = 0;

  incrementar(){
  this.contador++;
  } 

  decrementar(){
  this.contador--;
  }
  
  restablecer(){
  this.contador=0;
}




 //Para la operacion ternario de marcar y desmarcar
  estado_checkbox: boolean = true;
  
  
 //Para el input de color 
  color_input = "#000000";
  
  
  
  
    texto_input_u = 'Inhabilitado';
    texto_input_d = 'Inhabilitado';
    texto_input_t = 'Inhabilitado';



  getEdad(){
    return this.edad;
  }

  cambiar_registro(){
    this.usuario_registrado_porperty=!this.usuario_registrado_porperty;
  }

  set_habilitar_input_color(){
    this.texto_input_u = 'Habilitado';
    this.habilitar_color_property= false;
  }
  set_habilitar_input_estatura(){
  this.texto_input_d = 'Habilitado';
  this.habilitar_estatura_property=false;
  }

  set_habilitar_input_genero(){
  this.texto_input_t = 'Habilitado';
  this.habilitar_genero_property= false;
  }
  set_usuario_registrado(event:Event){
   //this.texto_registro = 'El usuario se acaba de registrar';
   //this.habilitar_input_property = false;
   //console.log(event.target);
    if((<HTMLInputElement>event.target).value=='si'){
    this.texto_registro = 'El usuario se acaba de registrar';
  }else{
  this.texto_registro = 'No hay nadie registrado';
  }
  }

  set_genero_registrado(event:Event){
   //this.texto_registro = 'El usuario se acaba de registrar';
   //this.habilitar_input_property = false;
   //console.log(event.target);
    if((<HTMLInputElement>event.target).value=='si'){
    this.genero_registrado = 'Femenino';
  }else{
    this.genero_registrado = 'Masculino';
    }


}

color_div_property = "background-color: blue;";

  cambiar_color_div() {
    if(this.color_div_property == "background-color: blue;"){
      this.color_div_property = "background-color: red;";
    }else{
      this.color_div_property = "background-color: blue;";
    }
  }


  
  
  url_imagen_property ='assets/media/img/imagen1.jpg';
  
  cambiar_imagen_div() {
    if(this.url_imagen_property == "assets/media/img/imagen1.jpg"){
      this.url_imagen_property = "assets/media/img/imagen3.jpg";
    }else{
      this.url_imagen_property = "assets/media/img/imagen3.jpg";
    }
  }

}
