function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        res.innerHTML = `Idade Calculada: ${idade}`
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 10) {
                //CRIANÇA
                img.setAttribute('src', 'foto-bebe-homem.png')
            }else if (idade < 16) {
                //ADOLESCENTE
                img.setAttribute('src', 'foto-homem-jovem.png')
            }else if (idade < 20) {
                //JOVEM ADULTO
                img.setAttribute('src', 'foto-homem-jovem30.png')
            }else if (idade < 40) {
                //ADULTO
                img.setAttribute('src', 'foto-homem-adulto.png')
            } else {
                img.setAttribute('src', 'foto-homem-idoso.png')
                //IDOSO
            }
                
        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade < 10) {
                //CRIANÇA
                img.setAttribute('src', 'foto-bebe-mulher.png')
            }else if (idade <21) {
                //JOVEM
                img.setAttribute('src', 'foto-jovem-mulher.png')
            } else if (idade < 50) {
                //ADULTO
                img.setAttribute('src', 'foto-mulher-adulta.png')
            } else {
                img.setAttribute('src', 'foto-mulher-idosa.png')
                //IDOSO
            }
        }
        res.style.textAlign = `center`
        res.innerHTML = `Detetamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}
