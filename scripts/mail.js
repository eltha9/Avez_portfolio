let send_button = document.querySelector('.send-button')

// dom
let mailling = document.querySelector('.mailing')
let validate = document.querySelector('.validate')


// value
let mail={
    dom: document.querySelector('.inputs')
}
mail.name = mail.dom.querySelector('.name')
mail.email = mail.dom.querySelector('.email')
mail.text = mail.dom.querySelector('.text')
let url = 'mail.php'
send_button.addEventListener('click', ()=>{

    fetch(`${url}/?name=${mail.name.value}&mail=${mail.email.value}&text=${mail.text.textContent}`)
    .then((response)=>{
        return response
    })
    .then((_response)=>{
        mailling.classList.toggle('hide')
        validate.classList.toggle('hide')
    })
})