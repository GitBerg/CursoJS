function contarPassos(){
    var inicio = document.getElementById('inicio').value
    var fim = document.getElementById('fim').value
    var passos = document.getElementById('qntpass').value
    var res = document.querySelector('div#res')
    
    if(inicio.length == 0 || fim.length == 0 || passos.length == 0){
        window.alert('Nenhum campo pode estar vazio')
    }else{

    if(passos == 0){
        window.alert('Passos nao pode ser 0, colocaremos 1')
        passos = 1
    }

    if(inicio <= 0){
        res.innerHTML = '<p>Impossivel iniciar com 0 ou numeros negativos'
    }
    else if(Number(passos) > Number(fim)){
        window.alert('Passos não pode ter valor maior que fim.')
    }else{
    
    res.innerHTML = '<p>Contando:'
    if(Number(inicio) > Number(fim)){
        for(var i=Number(inicio); i>=fim; i=i-Number(passos)){
            res.innerHTML += `${i} 👉 `
    }
}else{
    for(var i=Number(inicio); i<=fim; i=i+Number(passos)){
        res.innerHTML += `${i} 👉 `
    }
} 
   
    res.innerHTML += `🏁`
}
}
}
