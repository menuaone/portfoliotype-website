// появление всплювающего меню по нажатию на бургер

const navBtn = document.querySelector(".nav-icon-btn");
const navIcon = document.querySelector(".nav-icon");
const nav = document.querySelector(".header__top-row");

navBtn.addEventListener('click', function() {
    nav.classList.toggle('header__top-row--mobile');
    navIcon.classList.toggle('nav-icon--active');

    // убрать скролл
    document.body.classList.toggle('no--scroll');
})


// отправка письма на почту по нажатию на кнопку формы
function sendEmail() {

    // обозначаем переменные, которые заходят через форму
    let fname = document.getElementById("fname").value;
    let mail = document.getElementById("email").value;
    let message = document.getElementById("text").value;

    let body = "Name: " + fname + "<br/> Email: " + mail + "<br/> Message: " + message;

    // smtp API connection
    Email.send({
        SecureToken : "cb354adb-0384-4959-b7bb-23e4032cfc03",
        To : 'mishutkaboss@gmail.com',
        From : 'mishutkaboss@gmail.com',
        Subject : "Message From Contact Form",
        Body : body
    }).then(
    message => alert(message))

};

// по клику отправляем сообщение на почту
const submitBtn = document.getElementById("btn");

submitBtn.addEventListener('click', sendEmail)

// смена цвета фона

const colorBtn = document.getElementById("changeColor")

colorBtn.addEventListener('click', function(){
    // const body = document.querySelector('body');
    document.body.classList.toggle('dark-theme'); 

})