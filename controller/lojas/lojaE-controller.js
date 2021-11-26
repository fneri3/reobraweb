import { servicosLojas } from "./criaLojas.js";

const criaNovaLoja = (nome, descricao, preco, estoque, id) => {
    const linhaLojaE = document.createElement('li')
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

        linhaLojaE.innerHTML = conteudo
        linhaLojaE.dataset.id = id

    return linhaLojaE
}

const tabela = document.querySelector('[data-lojaE]')

const render = async () => {
    const listaLojas = await servicosLojas.lojaE()
    listaLojas.forEach(elemento => {
        tabela.appendChild(criaNovaLoja(elemento.produto.nome, elemento.produto.descricao, elemento.preco.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' }), elemento.estoque, elemento.produto.id))

    });
}

render()

let quantidade = 0
let precoA = parseFloat
let precoB = parseFloat
let precoC = parseFloat
let precoD = parseFloat
let precoE = parseFloat


tabela.addEventListener('click', (evento) => {
    let botao = evento.target.closest('[data-id]')
    let id = botao.dataset.id
    if(id == 1){
        quantidade++
        precoA = 15 * quantidade
    } else if (id==2){
        quantidade++
        precoB = 70 * quantidade
    } else if (id==3){
        quantidade++
        precoC = 50 * quantidade
    } else if (id==4){
        quantidade++
        precoD = 65 * quantidade
    } else {
        quantidade++
        precoE = 20 * quantidade
    }
})



