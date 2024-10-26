function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || fano.value > ano) {
        window.alert('[ERRO] Verificar os dados e tente novamente')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var gênero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            gênero = 'Homem'
            if (idade >=0 && idade < 10) {
                img.setAttribute('src', 'Imagens/bebehomem.jpg')
            } else if (idade < 21) {
                img.setAttribute('src', 'Imagens/jovemhomem.jpg')
            } else if (idade < 50) {
                img.setAttribute('src', 'Imagens/homemadulto.jpg')
            } else {
                img.setAttribute('src', 'Imagens/idosohomem.jpg')
            }
        } else if (fsex[1].checked) {
            gênero = 'Mulher'
            if (idade >=0 && idade < 10) {
                img.setAttribute('src', 'Imagens/bebemulher.jpg')
            } else if (idade < 21) {
                img.setAttribute('src', 'Imagens/jovemmulher.jpg')
            } else if (idade < 50) {
                img.setAttribute('src', 'Imagens/mulheradulta.jpg')
            } else {
                img.setAttribute('src', 'Imagens/idosomulher.jpg')
            }
        } 
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos`
        res.appendChild(img)
    }
}