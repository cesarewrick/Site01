document.getElementById('cadastroForm').addEventListener('submit', function(event){
    event.preventDefault();

    const email = document.getElementById('email').value;
    const nome = document.getElementById('nome').value;
    const dataNascimento = document.getElementById('dataNascimento').value;
    const senha = document.getElementById('senha').value;
    const confirmarSenha = document.getElementById('confirmarSenha').value;

    const mensagemErro = document.getElementById('mensagemErro');

    mensagemErro.textContent = '';
    mensagemErro.style.direction = 'none';

    if (!email || !nome || !dataNascimento || !senha || !confirmarSenha) {
       mensagemErro.textContent = 'Por favor, preencha todos os campos.';
       mensagemErro.style.display = 'block';
        return;
    }

    if (senha !== confirmarSenha) {
        mensagemErro.textContent = 'As senhas não coincidem.';
        mensagemErro.style.display = 'block'
        return;
    }

    if(senha.length < 8 || senha.length > 15) {
        mensagemErro.textContent = 'A senha deve ter entre 8 e 14 caracteres.';
        mensagemErro.style.display = 'block';
        return;
    }
    mensagemErro.textContent = 'Cadastro realizado com sucesso!';
    mensagemErro.style.color = '#008000';
    mensagemErro.style.display = 'block';

    setTimeout(function() {
        window.location.href = 'https://www.bibliaonline.com.br/';
    }, 2000);
});