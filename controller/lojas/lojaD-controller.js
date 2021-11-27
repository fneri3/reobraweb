import { servicosLojas } from "./criaLojas.js";

const criaNovaLoja = (nome, descricao, preco, estoque, id) => {
    const linhaLojaD = document.createElement('li')
    const conteudo = `
        <div class='lista__item' data-li>
            <img src='../img/imagem.jpg'/>
            <p class='lista__nome'>${nome}</p>
            <p class='lista__endereco'>${descricao}</p>
            <p class='lista__telefone'>${preco}</p>
            <p class='lista__telefone'>Em estoque ${estoque}</p>
            <button class='lista__botao' type='submit' ><a class='lista__link' id=${id}>Adicionar ao Carrinho</a>
            </button>
        </div>
        `

        linhaLojaD.innerHTML = conteudo
        linhaLojaD.dataset.id = id

    return linhaLojaD
}

const tabela = document.querySelector('[data-lojaD]')

const render = async () => {
    const listaLojas = await servicosLojas.lojaD()
    listaLojas.forEach(elemento => {
        tabela.appendChild(criaNovaLoja(elemento.produto.nome, elemento.produto.descricao, elemento.preco.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' }), elemento.estoque, elemento.produto.id))

    });
}

render()


tabela.addEventListener('click', (evento) => {
    let botao = evento.target.closest('[data-id]')
    let id = botao.dataset.id
    if(id == 1){
        window.location.href='./carrinho.html'
    } else if (id==2){
        window.location.href='./carrinho.html'
    } else if (id==3){
        window.location.href='./carrinho.html'
    } else if (id==4){
        window.location.href='./carrinho.html'
    } else {
        window.location.href='./carrinho.html'
    }
})



