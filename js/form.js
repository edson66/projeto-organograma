document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("formulario");
    if(form){
        const botao = document.getElementById("submit");
        const status = document.getElementById("status");

        form.addEventListener('submit', async (event) => {
            event.preventDefault();

            botao.disabled = true;
            botao.innerText = "Enviando ...";
            status.innerText = "";

            const formData = new FormData(form);

            try{
                const response = await fetch(form.action,{
                    method:form.method,
                    body: formData,
                    headers: {
                        'Accept': 'application/json'
                    }
                });

                if (response.ok) {
                    status.innerText = 'Obrigado! Sua mensagem foi enviada.';
                    status.style.color = 'green';
                    form.reset();
                    botao.innerText = 'Enviar Mensagem'; 
                    botao.disabled = false;  
                }else{
                    throw new Error('Houve um problema com o envio.');
                }
            }catch(error){
                console.error('Erro:', error);
                status.innerText = 'Algo deu errado. Tente novamente mais tarde.';
                status.style.color = 'red';
                botao.innerText = 'Enviar Mensagem'; 
                botao.disabled = false; 
            }
        })
    }
})