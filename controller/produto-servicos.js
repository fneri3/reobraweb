const criaProdutos = () => {
    return fetch('https://reobra-completo.herokuapp.com/reobra/produto')
    .then(resposta => {
        return resposta.json()
    })
}

export const servicosProdutos = {
    criaProdutos
}

