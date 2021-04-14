var gameOver = ` 
<head>
<meta charset="UTF-8">                   
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<link rel="stylesheet" href="LokiEstilo.css">
<title>Game Over</title>
</head>


<div class="Historia">
<h1> Você Perdeu!</h1>
<h1> Você não escolheu a melhor opção para a situação </h1>
<a href="../index.html"><button>Pressione o botão para jogar novamente</button><a>

<div>`

function LokiPrimeiraFase()
{
    var acertou = `
                    <head>
                    <meta charset="UTF-8">                   
                    <meta name="viewport" content="width=device-width, initial-scale=1.0">
                    <link rel="stylesheet" href="LokiEstilo.css">
                    <title>Avanço de Fase</title>
                    </head>
                    
                    
                    <div class="Historia">
                    <h1>Você acertou</h1>
                    <h2>Clique no botão abaixo para avançar</h2>
                    <a href="Loki2.html"><button>Avançar</button><a>
                    <div>`

    while(true)
    {
        var Pergunta1  = prompt('Tome sua Decisão: \n Insira 1 para mundo humano e 2 Para Asgard')
        if(Pergunta1 == 1)
        {
            document.write(acertou)
            break
        }
        else if(Pergunta1 == 2)
        {
            document.write(gameOver)
            break
        }
        alert('Opção inválida, tente novamente') 
    }

}




function LokiSegundaFase()
{
    var acertou = `
                    <head>
                    <meta charset="UTF-8">                   
                    <meta name="viewport" content="width=device-width, initial-scale=1.0">
                    <link rel="stylesheet" href="LokiEstilo.css">
                    <title>Avanço de Fase</title>
                    </head>
                    
                    
                    <div class="Historia">
                    <h1>Você acertou</h1>
                    <h2>Clique no botão abaixo para avançar</h2>
                    <a href="Loki3.html"><button>Avançar</button><a>
                    <div>`

    while(true)
    {
        var Pergunta1  = prompt('Tome sua Decisão: \n Insira 1 para Controlar as pessoas e 2 para desmaia-las')
        if(Pergunta1 == 1)
        {
            document.write(acertou)
            break
        }
        else if(Pergunta1 == 2)
        {
            document.write(gameOver)
            break
        }
        alert('Opção inválida, tente novamente') 
    }

}

function LokiTerceiraFase()
{
    var acertou = `
                    <head>
                    <meta charset="UTF-8">                   
                    <meta name="viewport" content="width=device-width, initial-scale=1.0">
                    <link rel="stylesheet" href="LokiEstilo.css">
                    <title>Avanço de Fase</title>
                    </head>
                    
                    
                    <div class="Historia">
                    <h1>Você acertou</h1>
                    <h2>Clique no botão abaixo para avançar</h2>
                    <a href="LokiPaginaVitoria.html"><button>Avançar</button><a>
                    <div>`

    while(true)
    {
        var Pergunta1  = prompt('Tome sua Decisão: \n Insira 1 para para atacarem Thor e 2 Para se disfarçar')
        if(Pergunta1 == 1)
        {
            document.write(acertou)
            break
        }
        else if(Pergunta1 == 2)
        {
            document.write(gameOver)
            break
        }
        alert('Opção inválida, tente novamente') 
    }

}