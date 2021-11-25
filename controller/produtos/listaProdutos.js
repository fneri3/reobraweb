import { servicosProdutos } from "./produto-servicos.js"

const criaNovaLinha = (nome, descricao ) => {
    const linhaNovoProduto = document.createElement('li')
    const conteudo = `
        <p>${nome}</p>
        <p>${descricao}</p>
        `
            
    linhaNovoProduto.innerHTML = conteudo

    return linhaNovoProduto
}

const tabela = document.querySelector('[data-lista]')

const render = async () => {
    const listaProdutos = await servicosProdutos.criaProdutos()
    listaProdutos.forEach(elemento => {
        tabela.appendChild(criaNovaLinha(elemento.nome, elemento.descricao, servicosProdutos.criaImagem()))
        
    });
}

render()
