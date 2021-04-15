var gameOver = ` 
<head>
<meta charset="UTF-8">                   
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<link rel="stylesheet" href="ArtemisEstilo.css">
<title>Game Over</title>
</head>


<div class="Historia">
<h1> Você Perdeu!</h1>
<h1> Você não escolheu a melhor opção para a situação </h1>
<a href="../index.html"><button>Pressione o botão para jogar novamente</button><a>

<div>`

function ArtemisPrimeiraFase()
{
    var acertou = `
                    <head>
                    <meta charset="UTF-8">                   
                    <meta name="viewport" content="width=device-width, initial-scale=1.0">
                    <link rel="stylesheet" href="ArtemisEstilo.css">
                    <title>Avanço de Fase</title>
                    </head>
                    
                    
                    <div class="Historia">
                    <h1>Você acertou</h1>
                    <h2>Clique no botão abaixo para avançar</h2>
                    <a href="Artemis2.html"><button>Avançar</button><a>
                    <div>`

    while(true)
    {
        var Pergunta1  = prompt('Tome sua Decisão: \n Insira 1 para alertar e 2 Para mata-los')
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




function ArtemisSegundaFase()
{
    var acertou = `
                    <head>
                    <meta charset="UTF-8">                   
                    <meta name="viewport" content="width=device-width, initial-scale=1.0">
                    <link rel="stylesheet" href="ArtemisEstilo.css">
                    <title>Avanço de Fase</title>
                    </head>
                    
                    
                    <div class="Historia">
                    <h1>Você acertou</h1>
                    <h2>Clique no botão abaixo para avançar</h2>
                    <a href="Artemis3.html"><button>Avançar</button><a>
                    <div>`

    while(true)
    {
        var Pergunta1  = prompt('Tome sua Decisão: \n Insira 1 Para mata-los e 2 para transforma-los')
        if(Pergunta1 == 2)
        {
            document.write(acertou)
            break
        }
        else if(Pergunta1 == 1)
        {
            document.write(gameOver)
            break
        }
        alert('Opção inválida, tente novamente') 
    }

}

function ArtemisTerceiraFase()
{
    var acertou = `
                    <head>
                    <meta charset="UTF-8">                   
                    <meta name="viewport" content="width=device-width, initial-scale=1.0">
                    <link rel="stylesheet" href="ArtemisEstilo.css">
                    <title>Avanço de Fase</title>
                    </head>
                    
                    
                    <div class="Historia">
                    <h1>Você acertou</h1>
                    <h2>Clique no botão abaixo para avançar</h2>
                    <a href="ArtemisPaginaVitoria.html"><button>Avançar</button><a>
                    <div>`

    while(true)
    {
        var Pergunta1  = prompt('Tome sua Decisão: \n  Insira 1 Para deixa-los e 2 para invocar lobos  ')
        if(Pergunta1 == 2)
        {
            document.write(acertou)
            break
        }
        else if(Pergunta1 == 1)
        {
            document.write(gameOver)
            break
        }
        alert('Opção inválida, tente novamente') 
    }

}