document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("login").addEventListener('submit', validarFormulario); 
  });
  
  function validarFormulario(evento) {
    evento.preventDefault();
    var usuario = document.getElementById('usuario').value;
    if(usuario == "") {
      alert('Favor ingresar el nombre del usuario');
      return;
    }
    var clave = document.getElementById('contrasena').value;
    if (clave =="12345") {
      alert('La clave es inválida, favor ingrese una contrasena diferente');
      return;
    }

    if (clave =="") {
      alert('La clave es inválida, favor ingrese una contrasena diferente');
      return;
    }
    this.submit();
  }