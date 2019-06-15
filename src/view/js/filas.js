// const fs = require("fs");
// fs.readFile('../../bd/filas.json','utf-8',function (err,data) {
//     if(err){
//         return console.log('Erro ao ler o arquivo')
//     }
//     const jsonData = JSON.parse(data)

//     console.log(jsonData)
// })


$.getJSON("../bd/filas.json", function (data) {
        for( let participante of data['manicure']['participantes']){
            const linha = $('<tr>')
            const dadoNome = $('<td>').html(participante.nome)
            const dadoHorario = $('<td>').html(participante.horario)
            linha.append(dadoNome).append(dadoHorario)
            $('tbody').append(linha)
        }
    }
)