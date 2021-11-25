import { servicosLojas } from "./criaLojas.js"

const criaNovaLoja = (nome, endereco, telefone, id ) => {
    const linhaNovaLoja = document.createElement('li')
    const conteudo = `
        <div class='lista__item' data-li>
            <img class='lista__imagem' src='../../../img/loja.png'/>
            <p class='lista__nome'>${nome}</p>
            <p class='lista__endereco'>${endereco}</p>
            <p class='lista__telefone'>${telefone}</p>
            <button class='lista__botao' type='submit' ><a class='lista__link' id=${id}>Pesquisar Produtos</a>
            </button>
        </div>
        `
            
    linhaNovaLoja.innerHTML = conteudo
    linhaNovaLoja.dataset.id = id

    return linhaNovaLoja
}

const tabela = document.querySelector('[data-lista]')


const render = async () => {
    const listaLojas = await servicosLojas.criaLoja()
    listaLojas.forEach(elemento => {
        tabela.appendChild(criaNovaLoja(elemento.nome, elemento.endereco, elemento.telefone, elemento.id))
        
    });
}

render()

tabela.addEventListener('click', (evento) => {
    let botao = evento.target.closest('[data-id]')
    let id = botao.dataset.id
    if(id == 1) {
        window.location.href='./lojaA.html'
    } else if (id ==2) {
        window.location.href='./lojaB.html'
    } else if (id == 3) {
        window.location.href='./lojaC.html'
    } else if (id == 4) {
        window.location.href='./lojaD.html'
    } else {
        window.location.href='./lojaE.html'
    }
})