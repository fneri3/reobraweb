const criaCliente = (nome, nascimento, endereco, telefone) => {
    return fetch('https://reobra-completo.herokuapp.com/reobra/cliente', {
        method: 'POST', 
        headers: {
            'Content-type':'application/json'
        },
        body: JSON.stringify({
            nome: nome,
            nascimento: nascimento, 
            endereco: endereco, 
            telefone: telefone
        })
    })
    .then(response => {
        return response.body
    })
}

export const servicosCliente = {
    criaCliente
}