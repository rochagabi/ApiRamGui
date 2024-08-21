let express = require('express');
let app = express();

app.get('/cor/:cor', (requisicao, resposta) => {
    let cor = requisicao.params.cor;

    // Verifica a palavra e responde de acordo
    if (cor === 'azul') {
        resposta.send('Azul é tri!');
    } else if (cor === 'amarelo') {
        resposta.send('Amarelo eh do baralho!');
    } else {
        resposta.send(`Oi, ${cor}!`);
    }
});

app.listen(5000, () => {
    console.log("Express inicializado com sucesso na porta 5000");
});
