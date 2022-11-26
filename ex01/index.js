const principal = document.querySelector('.principal')
const secundario = document.querySelector('.secundario')
const corpo = document.querySelector('.corpo')
const img = document.querySelector('.img')
 


const hora = new Date()
const test = hora.getHours()



if(test< 12){
    principal.innerHTML = 'Agora São ' + hora.getHours() + ' Hrs ' + hora.getMinutes() + ' Minutos' 
    img.src = "assets/bom-dia-com-carinho-1250x625.jpg"
    secundario.innerHTML = 'Bom dia!!!'
    corpo.style.background = "rgb(28, 89, 124)"
}else if(test< 18){
    principal.innerHTML = 'Agora São ' + hora.getHours() + ' Hrs ' + hora.getMinutes() + ' Minutos' 
    img.src = "assets/hqdefault.jpg"
    secundario.innerHTML = 'Boa Tarde!!!'
    corpo.style.background = "rgb(212, 120, 0)"
}else if (test > 13){
    principal.innerHTML = 'Agora São ' + hora.getHours() + ' Hrs ' + hora.getMinutes() + ' Minutos'
    img.src = "assets/noite.jpg"
    secundario.innerHTML = 'Boa Noite!!!'
    corpo.style.background = "rgb(43, 43, 43)"
}


