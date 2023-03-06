// Obtener los elementos del formulario
const form = document.querySelector('form');
const username = document.querySelector('#username');
const password = document.querySelector('#password');
const registroComentario = document.querySelector('#registroComentario');
const bienvenidaComentario = document.querySelector('#bienvenidaComentario');


form.addEventListener('submit', (event) => {
  event.preventDefault(); 
});


document.querySelector('[value="Iniciar sesión"]').onclick = () => {
	// Obtener los valores de los campos de entrada
	const usernameValue = username.value.trim();
	const passwordValue = password.value.trim();
  

	if (usernameValue === '' || passwordValue === '') {
	  alert('Por favor, rellena todos los campos.');
	} else {

	  bienvenidaComentario.textContent = `Bienvenido: ${usernameValu}`;
	  registroComentario.textContent = ''; 
  

	  username.value = '';
	  password.value = '';
	}
  };


document.querySelector('[value="Registrar"]').onclick = () => {
  // Obtener los valores de los campos de entrada
  const usernameValue = username.value.trim();
  const passwordValue = password.value.trim();


  if (usernameValue === '' || passwordValue === '') {
    alert('Por favor, rellena todos los campos.');
  } else {

    registroComentario.textContent = `Registrado: ${usernameValue}`;


    username.value = '';
    password.value = '';
  }
};
