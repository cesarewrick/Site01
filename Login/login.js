document.getElementById('loginForm').addEventListener('submit', function(event){
    event.preventDefault();

    const email = document.getElementById('email').value;
    const senha = document.getElementById('senha').value;

    if(!email || !senha) {
        alert('Por favor, preencha todos os campos.');
        return
    }

    alert('Login realizado com sucesso!');

    window.location.href = 'https://www.bibliaonline.com.br/';
})