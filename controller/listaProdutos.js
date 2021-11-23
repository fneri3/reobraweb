import { servicosProdutos } from "./produto-servicos.js"

const criaNovaLinha = (nome, descricao, caminho_imagem ) => {
    const linhaNovoProduto = document.createElement('li')
    const conteudo = `
        <p>${nome}</p>
        <p>${descricao}</p>
        <img src="${caminho_imagem}"/>
        `
            
    linhaNovoProduto.innerHTML = conteudo

    return linhaNovoProduto
}

const tabela = document.querySelector('[data-lista]')

const render = async () => {
    const listaProdutos = await servicosProdutos.criaProdutos()
    listaProdutos.forEach(elemento => {
        tabela.appendChild(criaNovaLinha(elemento.nome, elemento.descricao, elemento.caminho_imagem))
        
    });
}



render()