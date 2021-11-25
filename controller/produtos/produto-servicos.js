const criaProdutos = () => {
    return fetch('https://reobra-completo.herokuapp.com/reobra/produto')
        .then(resposta => {
            return resposta.json()
        })
}

var imagem = document.querySelector('[data-imagem]')

const criaImagem = () => {
    return fetch('https://reobra-completo.herokuapp.com/reobra/produto/imagem/1')
        .then(function (response) {
            return response.blob();
        })
        .then(function (myBlob) {
            var objectURL = URL.createObjectURL(myBlob);
            imagem.src = objectURL
        });
}

export const servicosProdutos = {
    criaProdutos,
    criaImagem
}

