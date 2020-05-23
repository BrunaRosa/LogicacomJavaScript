function solicitaDadoFloat(mensagem)
{
    return Number(prompt(mensagem).replace(',','.')) 
}

function solicitaDadoInt(mensagem)
{
    return parseInt(prompt(mensagem).replace(',','.')) 
}