module.exports = function(app){
    app.get('/novidades', (req, res) => {
    res.send(`
        <!DOCTYPE html> 
        <html lang="pt-BR">
        <head>
            <meta charset="UTF-8">
            <title>Novidades</title>
        </head>
        <body>
            <h1>Novidades</h1>

            <h2>Semana de Tecnologia</h2>
            <p>
                Confira as últimas novidades e informações sobre o evento!
            </p>

            <ul>
                <li>Novas palestras confirmadas</li>
                <li>Workshops com vagas abertas</li>
                <li>Programação atualizada</li>
            </ul>
        </body>
        </html>
    `); //res.render renderiza uma página inteira ja pronta. res.send manda os componentes a serem renderizados.
})};