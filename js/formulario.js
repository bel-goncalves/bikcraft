const formulario = document.querySelector("form");

function formularioEnviado(resposta){
    if (resposta.ok){
        formulario.innerHTML = "<p class='font-2-l' style='grid-column: 1/-1; padding: 1rem; border-radius: 4px; background: #f7f7f7;'> <span style= 'color: #317a00'>Mensagem enviada</span>, em breve entraremos em contato. Geralmente respondemos em até 24 horas."
    }else{
        formulario.innerHTML = "<p class='font-2-l' style='grid-column: 1/-1; padding: 1rem; border-radius: 4px; background: #f7f7f7;'> <span style= 'color: #E00000';>Erro no envio</span>, formulário indisponível. Entre em contato diretamente pelo <a href='https://www.linkedin.com/in/isabel-gon%C3%A7alves/' style='text-decoration: underline';>linkedIn</a>. </p>"
    }
}

function enviarFormulario(event){
    event.preventDefault();
    const botao = document.querySelector("form button");
    botao.disabled = true;
    botao.innerText = "Enviando..."

    const data = new FormData(formulario);

    fetch("./enviar.php", {
        method: "POST",
        body: data
    }).then(formularioEnviado);
}

formulario.addEventListener("submit", enviarFormulario);