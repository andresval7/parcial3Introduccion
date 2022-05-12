document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("login").addEventListener('submit', validarFormulario); 
  });

  var usuario;
  var clave;
  var datosCorrectos;
  var ingresoUsuario=false;

  //Para ejecutar el fetch es necesaria una función asincrona
  const validarFormulario = async (evento) =>{
    evento.preventDefault();
    
    const urlget = 'https://cesde-f928b-default-rtdb.firebaseio.com/user.json';
    
    usuario = document.getElementById('usuario').value;
    clave = document.getElementById('contrasena').value;
    if (clave =="") {
      alert('El campo contraseña no puede estar vacio');
      return;
    }
    //Todo fetch debe ir dentro de un try catch.
    try
    {
      //captura de la respuesta
      const response = await fetch(urlget);
      //captura de los datos, tipo JSON
      const datosJson = await response.json();
      //Ciclo para recorrer JSON segun key y value
      for (let key in datosJson) {
        if (datosJson[key].mail === usuario && datosJson[key].password === clave)
          ingresoUsuario=true; 
      }

      if(ingresoUsuario)
      {
        alert("Bienvenido: " +usuario);
        window.open("./index.html", "_self");
      }
      else{
        document.getElementById('usuario').value = "";
        document.getElementById('contrasena').value = "";
        alert("Usuario y/o contraseña incorrectos, ingrese de nuevo");
      }
      //debugger;
    }
    catch (error)
    {
      console.log(error);
    }

  }