function contar() {
    let ini = document.getElementById('txti')
    let fim = document.getElementById('txtf')
    let passo = document.getElementById('txtp')
    let res = document.getElementById('res')

    if (ini.value == 0 || fim.value == 0 || passo.value == 0) {
        res.innerHTML = 'Impossível Contar!'
        //window.alert('[ERRO] Faltam dados!')
        
    } else {
        res.innerHTML = 'Contando: <br>'
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        if (p <= 0) {
            window.alert('Passo inválido! Considere o PASSO 1')
            p = 1
        } 
        if (i < f) {
            // Contagem crescente
            for(let c = i; c <= f; c += p) {
            res.innerHTML += `${c} \u{1F449}`
        }
            
        } else {
            // Contagem decrescente
            for( let c = i; c >= f; c -= p) {
                res.innerHTML += `${c} \u{1F449}`

            } 
        }
        res.innerHTML += `\u{1F3C1}`
        
        
    }
}