<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="preconnect" href="https://fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css2?family=Noto+Serif&display=swap" rel="stylesheet">
    <title>Notas Recuperação</title>

    <style>
        body {
            background-image: url(/background-image/fundo\ 1.jpg);
        }

        .notas {
            display: none;
        }

        #qtno {
            width: 188px;
        }

        .container {
            max-width: 900px;
            background-color: rgba(255, 255, 14, 0.596);
            margin-left: auto;
            margin-right: auto;
            position: relative;
            margin-top: 200px;
        }

        h3, h2{
            text-align: center;
            font-family: 'Noto Serif', serif;
            color:black;
        }

        input{
            
            margin-left: 35%;
        }
    </style>
</head>

<body>

    <div class="container">
        <header>
            <p> <h3>Calcularmos quanto você precisará tirar na final, para não reprovar. Informe o que se pede:</h3></p>
            <p><h3> Sua escola trabalha com trimestre ou bimestre? caso seja trimestre você tem 3 notas, se for bimestre você
                possui 4 notas.</h3></p>
            <input type="number" name="quantidade de notas" placeholder="Informe a quantidade de notas" id="qtno">
            <button id="botao" onclick="quantidade()">Enviar</button>
        </header>

        <div class="notas">
            <input type="number" name="nota 1" placeholder="nota 1" id="n1"> <br>
            <input type="number" name="nota 2" placeholder="nota 2" id="n2"> <br>
            <input type="number" name="nota 3" placeholder="nota 3" id="n3"> <br>
            <input type="number" name="nota 4" placeholder="nota 4" id="n4">
            <button id="calcular">Calcular</button>
        </div>

        <div>
            <p class="mostrar">

            </p>
        </div>

    </div>
    <script src="nota.js"></script>
</body>

</html>
