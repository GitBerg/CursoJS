function carregar(){
var msg = document.getElementById('msg')
var img = document.getElementById('imagem')
var txt = document.querySelector('header#txt')
var data = new Date()
var hora = data.getHours()
var minutos = data.getMinutes()
msg.innerHTML = `Agora são ${hora} horas e ${minutos} minutos.`
if(hora >= 0 && hora < 12){
    document.querySelector('h1#cumprimento').innerHTML = "Boa Dia!"
    img.src = 'manha.png'
    document.body.style.background = '#ffe5a1'
} else if (hora >= 12 && hora <= 18){
    txt.style.color = '#fffa77'
    document.querySelector('h1#cumprimento').innerHTML = "Boa Tarde!"
    document.body.style.background = '#f1ba96'
    document.querySelector('footer#txt').style.color = '#fffa77'
    img.src = 'tarde.png'
}else{
    document.body.style.background = '#09326b'
    txt.style.color = 'white'
    document.querySelector('h1#cumprimento').innerHTML = "Boa Noite!"
    document.querySelector('footer#txt').style.color = 'white'
    img.src = 'noite.png'
}
}