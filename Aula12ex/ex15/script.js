function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.querySelector('input#txtano')
    var res = document.querySelector('div#res')
    if(fano.value.length == 0 || fano.value > ano){
        window.alert('[ERRO] Verifique o ano e tente novamente!')
    }else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id','foto')
        img.style.borderRadius = '50%'
        img.style.width = '250px'
        img.style.height = '250px'
        if (fsex[0].checked){
            genero = 'homem'
            if(idade >= 0  && idade < 10){
                img.setAttribute('src', 'm_child.png')
                 //criaça
            }else if(idade < 21){
                img.setAttribute('src', 'm_young.png')
                //jovem
            }else if(idade < 50){
                img.setAttribute('src', 'm_adult.png')
                //Adulto
            }else {
                img.setAttribute('src', 'm_old.png')
                //idoso
            }
        } else if(fsex[1].checked){
            genero = 'mulher'  
            if(idade >= 0  && idade < 10){
                img.setAttribute('src', 'g_child.png')
                //criaça
            }else if(idade < 21){
                img.setAttribute('src', 'g_young.png')
                //jovem
            }else if(idade < 50){
                img.setAttribute('src', 'g_adult.png')
                //Adulto
            }else {
                img.setAttribute('src', 'g_old.png')
                //idoso
            }
        }
        res.innerHTML = `Detectamos uma ${genero} com ${idade} anos.`
        res.style.textAlign = 'center'
        res.appendChild(img)
    }
}