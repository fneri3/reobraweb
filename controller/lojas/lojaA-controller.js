import { servicosLojas } from "./criaLojas.js";

const criaNovaLoja = (nome, descricao, preco, estoque, id ) => {
    const linhaNovaLoja = document.createElement('li')
    const conteudo = `
        <div class='lista__item' data-li>
            <p class='lista__nome'>${nome}</p>
            <p class='lista__endereco'>${descricao}</p>
            <p class='lista__telefone'>${preco}</p>
            <p class='lista__telefone'>${estoque}</p>
            <button class='lista__botao' type='submit' ><a class='lista__link' id=${id}>Adicionar ao Carrinho</a>
            </button>
        </div>
        `
            
    linhaNovaLoja.innerHTML = conteudo
    linhaNovaLoja.dataset.id = id

    return linhaNovaLoja
}

const tabela = document.querySelector('[data-form]')


const render = async () => {
    const listaLojas = await servicosLojas.lojaA()
    listaLojas.forEach(elemento => {
        tabela.appendChild(criaNovaLoja(elemento.nome, elemento.descricao, elemento.preco, elemento.estoque, elemento.id))
        
    });
}

render()
