
/*Cadastro Form */
const clienteCadastroForm = document.getElementById('clienteCadastroForm');

clienteCadastroForm.addEventListener('submit', (event) =>{
    event.preventDefault();
    const senha = document.getElementById('senhaCliente').value;
    const repetirSenha = document.getElementById('repetirSenhaCliente').value;
    const msgErro = document.getElementById('msgErroCliente');

    if (senha !== repetirSenha) {
        msgErro.style.display = 'inline';
        document.getElementById('repetirSenhaCliente').classList.add('erro');
        document.getElementById('senhaCliente').classList.add('erro');
        return false;
    }else{
        msgErro.style.display = 'none';
        clienteCadastroForm.submit();
        return true;
    }
})