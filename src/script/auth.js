var email = document.getElementById('email')
var password = document.getElementById('password')
var loginButton = document.getElementById('login-btn')

var account = [
    {
        email:'zuno8898@gmail.com',
        password: 'hii18112'
    },
    {
        email:'admin',
        password:'admin'
    }


]

const loginEvent = () => {
    let userIcon = document.querySelector('.js-user')
    if (email.value === account[0].email && password.value === account[0].password){
        userIcon.href = 'infor.html'
        console.log(userIcon.href)
    }
    if (email.value === account[1].email && password.value === account[1].password){
        userIcon.href = 'quanly.html'
        console.log(userIcon.href)
    }
    close_form_login()
    userIcon.removeEventListener('click',show_form_login)
}

loginButton.addEventListener('click',loginEvent)