let valores = []

function adicionar(){
let num = document.getElementById('txtn')
let sel = document.getElementById('selval')
let n = Number(num.value)

if(n <= 0 || n > 100 || valores.indexOf(n) != -1){
    window.alert('Valor inválido ou já inserido!')
}else{
    let item = document.createElement('option')
    item.text = `Valor ${n} adicionado`
    sel.appendChild(item)
    valores.push(n)
}
}
function analisar(){
    if(valores.length == 0){
        window.alert('Adicione valores a tabela antes de finalizar')
    }else{
    let res = document.querySelector('div#res')
    let maior = 0
    let menor = 100
    let total = 0
    let media = 0
    res.innerHTML = `<p>Ao todo, temos ${valores.length} número(s) cadastrado(s)`
    for(let n in valores){
        if(valores[n] > maior){
            maior = Number(valores[n])
        }
        if(valores[n] < menor){
            menor = Number(valores[n])
        }
        total += valores[n]
    }
    media = total/valores.length

    res.innerHTML += `<p>O maior valor informado foi ${maior}`
    res.innerHTML += `<p>O menor valor informado foi ${menor}`
    res.innerHTML += `<p>Somando todos os valores, temos ${total}`
    res.innerHTML += `<p>A média dos valores digitalizados é ${media}`
}
}