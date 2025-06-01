export function validatePassword() { 
  const finalAnswer = 'momo quien te corto el pelo para no ir?'
  const inputAnswer = document.getElementById('respuesta-audio')
  const inputValue = inputAnswer.value.toLowerCase().trim()


  const inputInfo = document.getElementById('answer-status')

  if (inputValue === finalAnswer) {
    inputInfo.value = 'Acceso concedido';
  } else {
    alert("contraseña incorrecta")
    inputInfo.value = '';
  }
}

window.validatePassword = validatePassword