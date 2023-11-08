const user_con = document.querySelector('.user-container');
const regis_btn = document.querySelector('.registration-btn');
const login_btn = document.querySelector('.login-btn');

regis_btn.addEventListener('click', () => {
    user_con.classList.add('login-section--display');
})

login_btn.addEventListener('click', () => {
    user_con.classList.remove('login-section--display');
})



// // responsive navbar code tabbbed document
// // ==============================================

//    const mobile_nav = document.querySelector(".mobile-navbar-btn");
//    const headerElem = document.querySelector(".header");

//    mobile_nav.addEventListener("click",() => {
//     headerElem.classList.toggle('active');
//    }) 
