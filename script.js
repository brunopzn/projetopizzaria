const nome = document.querySelector('#nome');
const email = document.querySelector('#email');
const tel = document.querySelector('#tel');
const message = document.querySelector('#message');
const formulario = document.querySelector('.contact-form')



formulario.addEventListener('submit', (event) => {
    event.preventDefault();
    let regexEmail = /\S+@\S+\.\S+/;
    userNameInput = nome.value;
    userMessageInput = message.value;
    const userEmailInput = email.value;
    
    if(!regexEmail.test(userEmailInput)) {
        email.style.border = '2px solid red';
        alert('Digite um e-mail valido')
        return
    } 

    return alert(`Olá ${userNameInput} seu pedido foi recebido: ${userMessageInput} `)
})
