const btnSubmit = document.querySelector('#btn-submit')
btnSubmit.addEventListener('click', (e)=>{
    e.preventDefault()
    let name = document.querySelector('#name-complete').value.trim()
    localStorage.setItem('#name-complete', name)
    localStorage.getItem('#name-complete')

    let email = document.querySelector('#email').value.trim()
    localStorage.setItem('#email', email)
    localStorage.getItem('#email')
    
    let phone = Number(document.querySelector('#phone').value)
    localStorage.setItem('#phone', phone)
    localStorage.getItem('#phone')
    
    let message = document.querySelector('#message').value.trim()
    localStorage.setItem('message', message)
    localStorage.getItem('#message')


    if (!name) {
        alert('Por favor, preencha seu nome.')
        return
    } else {
        console.log('Nome válido:', name);
    }
    if (!email) {
        alert('Por favor, preencha seu email.')
        return
    }else{
        console.log('Email válido:', email);
    }
    if (!phone) {
        alert('Por favor, preencha seu telefone.')
        return
    } else {
        console.log('Telefone válido:', phone);
    }
    if (!message) {
        alert('Por favor, faça um comentário.')
        return
    } else {
        console.log('Comentário válido:', message);
    }
    

    localStorage.clear()
    messageFinal(name)
})

function messageFinal(name){
    let messageThank = document.querySelector('span')
    messageThank.innerText = `Obrigado, ${name}! Nossa equipe entrará em contato em até 24 horas para atender sua solicitação.`
    
    let p = document.querySelector('.subtitle')
    p.style.display = 'none'
    let p1 = document.querySelector('.subtitle1')
    p1.style.display = 'none'

    let form = document.querySelector('form')
    form.style.display = 'none'
}