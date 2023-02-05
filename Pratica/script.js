    let fnum = document.querySelector('input#num')
    let lista = document.querySelector('select#flista')
    let res = document.querySelector('div#res')
    let valores = []

    function isNumero (n){
        if(Number(n) >= 1 && Number(n) <= 100){
            return true
        } else {
            return false
        }
    }
    function inLista(n, l){
        if (l.indexOf(Number(n)) != -1){
            return true
        } else {
            return false
        }
    }
    function adicionar(){
        if (isNumero(fnum.value) && !inLista(fnum.value, valores)){
            valores.push(Number(fnum.value))
            let item = document.createElement('option')
            item.text = `valor ${fnum.value} adicionado`
            lista.appendChild(item)
            res.innerHTML = ''
        } else{
            alert ('número invalido ou já encontrado na lista')
        }
        fnum.value = ''
    fnum.focus()
    }

    function finalizar(){
        if (valores.length == 0){
            window.alert = ('Adicione valores antes de finalizar!')
        } else {
            let tot = valores.length
            let maior = valores[0]
            let menor = valores[0]
            let soma = 0
            let media = 0
            for (let pos in valores) {
                soma += valores[pos]
                if (valores [pos] > maior)
                maior = valores[pos]
                if (valores[pos] < menor)
                menor = valores[pos]
            }
            media = soma / tot
            res.innerHTML = ''
            res.innerHTML += `<p>Ao todo temos ${tot} números cadastrados!</p>`
            res.innerHTML += `<p> o maior valor informado foi ${maior}</p>`
            res.innerHTML += `<p>o menor valor informado foi ${menor}</p>`
            res.innerHTML += `<p>somando todos os valores, temos ${soma}</p>`
            res.innerHTML += `<p>A media dos valores é ${media}</p>`
        }
    }
    


