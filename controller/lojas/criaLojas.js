const criaLoja = () => {
    return fetch('https://reobra-completo.herokuapp.com/reobra/loja')
        .then(resposta => {
            return resposta.json()
        })
}


const lojaA = () => {
    return fetch('https://reobra-completo.herokuapp.com/reobra/produto/loja/1')
        .then(response => {
            return response.json();
        })
}

const lojaB = () => {
    return fetch('https://reobra-completo.herokuapp.com/reobra/produto/loja/2')
        .then(resposta => {
            return resposta.json()
        })
}

const lojaC = () => {
    return fetch('https://reobra-completo.herokuapp.com/reobra/produto/loja/3')
        .then(resposta => {
            return resposta.json()
        })
}

const lojaD = () => {
    return fetch('https://reobra-completo.herokuapp.com/reobra/produto/loja/4')
        .then(resposta => {
            return resposta.json()
        })
}

const lojaE = () => {
    return fetch('https://reobra-completo.herokuapp.com/reobra/produto/loja/5')
        .then(resposta => {
            return resposta.json()
        })
}

export const servicosLojas = {
    criaLoja,
    lojaA,
    lojaB,
    lojaC,
    lojaD,
    lojaE,
}




