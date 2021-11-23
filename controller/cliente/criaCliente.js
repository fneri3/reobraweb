import { servicosCliente } from "./clienteServicos-controller.js";

const formulario = document.querySelector('[data-form]')

formulario.addEventListener('submit', (evento) =>{
    evento.preventDefault()

    const nome = evento.target.querySelector('[data-nome]').value
    const nascimento = evento.target.querySelector('[data-nascimento]').value
    const endereco = evento.target.querySelector('[data-endereco]').value
    const telefone = evento.target.querySelector('[data-telefone]').value

    servicosCliente.criaCliente(nome, nascimento, endereco, telefone)
    .then(() => {
        window.location.href='../../concluido.html'
    })

})

