(function()){
  var formulario = document.getElementById('formulario'),
    instrumento = formulario.instrumento,
    edad = formulario.edad,
    horas = formulario.horas,
    nombre = formulario.nombre,
    correo = formulario.correo,
    terminos = formulario.terminos,
    error = document.getElementById('error');

  function validarNombre(e){
      if(nombre.value == '' || nombre.value == null){
        console.log('Por favor completa el nombre');
        error.style.display = 'block';
        error.innerHTML = error.innerHTML + '<li>Por favor completa el nombre</li>';
        e.preventDefault();
      } else {
        error.style.display = 'none';
      }
    }
  function validarCorreo(e){
    if(correo.value == '' || correo.value == null){
      console.log('Por favor completa el correo');
      error.style.display = 'block';
      error.innerHTML = error.innerHTML + '<li>Por favor completa el correo</li>';
      e.preventDefault();
    }else {
      error.style.display = 'none';
    }
  }
  function validarInstrumento(e){
    if(instrumento.value == '' || instrumento.value == null){
      console.log('Por favor elegir instrumento');
      error.style.display = 'block';
      error.innerHTML = error.innerHTML + '<li>Por favor elige un instrumento</li>';
      e.preventDefault();
    }else {
      error.style.display = 'none';
    }
  }
  function validarEdad(e){
    if(edad.value == '' || edad.value == null){
      console.log('Por favor selecciona tu rango de edad');
      error.style.display = 'block';
      error.innerHTML = error.innerHTML + '<li>Por favor selcciona tu rango de edad</li>';
      e.preventDefault();
    }else{
      error.style.display = 'none';
    }
  }
  function validarHoras(e){
    if(horas.value == '' || horas.value == null){
      console.log('Por favor selcciona una cantidad de horas');
      error.style.display ='block';
      error.innerHTML = error.innerHTML + '<li>Por favor selecciona una cantidad de horas</li>';
      e.preventDefault();
    }else {
      error.style.display = 'none';
    }
  }
  function validarTerminos(e){
    if(terminos.checked == false){
      console.log('Debes aceptar los terminos');
      error.style.display = 'block';
      error.innerHTML = error.innerHTML + '<li>Debes aceptar los terminos</li>';
      e.preventDefault();
    }else{
      error.style.display = 'none';
    }
  }

  function validadFormulario(e){
    error.innerHTML = '';
    validarInstrumento(e);
    validarEdad(e);
    validarHoras(e);
    validarNombre(e);
    validarCorreo(e);
    validarTerminos(e);
  }
formulario.addEventListener('submit', validadFormulario);
}())
