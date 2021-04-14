
var gameOver = ` 
<head>
<meta charset="UTF-8">                   
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<link rel="stylesheet" href="AnubisEstilo.css">
<title>Game Over</title>
</head>


<div class="Historia">
<h1> Você Perdeu!</h1>
<h1> Você não escolheu a melhor opção para a situação </h1>
<a href="../index.html"><button>Pressione o botão para jogar novamente</button><a>

<div>`

function AnubisPrimeiraFase()
{
    var acertou = `
                    <head>
                    <meta charset="UTF-8">                   
                    <meta name="viewport" content="width=device-width, initial-scale=1.0">
                    <link rel="stylesheet" href="AnubisEstilo.css">
                    <title>Avanço de Fase</title>
                    </head>
                    
                    
                    <div class="Historia">
                    <h1>Você acertou</h1>
                    <h2>Clique no botão abaixo para avançar</h2>
                    <a href="Anubis2.html"><button>Avançar</button><a>
                    <div>`

    while(true)
    {
        var Pergunta1  = prompt('Tome sua Decisão: \n Insira 1 para mata-los e 2 Para poupa-los')
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




function AnubisSegundaFase()
{
    var acertou = `
                    <head>
                    <meta charset="UTF-8">                   
                    <meta name="viewport" content="width=device-width, initial-scale=1.0">
                    <link rel="stylesheet" href="AnubisEstilo.css">
                    <title>Avanço de Fase</title>
                    </head>
                    
                    
                    <div class="Historia">
                    <h1>Você acertou</h1>
                    <h2>Clique no botão abaixo para avançar</h2>
                    <a href="Anubis3.html"><button>Avançar</button><a>
                    <div>`

    while(true)
    {
        var Pergunta1  = prompt('Tome sua Decisão: \n Insira 1 para envialo ao submundo e 2 Para retornar sua alma')
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

function AnubisTerceiraFase()
{
    var acertou = `
                    <head>
                    <meta charset="UTF-8">                   
                    <meta name="viewport" content="width=device-width, initial-scale=1.0">
                    <link rel="stylesheet" href="AnubisEstilo.css">
                    <title>Avanço de Fase</title>
                    </head>
                    
                    
                    <div class="Historia">
                    <h1>Você acertou</h1>
                    <h2>Clique no botão abaixo para avançar</h2>
                    <a href="AnubisPaginaVitoria.html"><button>Avançar</button><a>
                    <div>`

    while(true)
    {
        var Pergunta1  = prompt('Tome sua Decisão: \n Insira 1 para aceitar e 2 Para recusar')
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