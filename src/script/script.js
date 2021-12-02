var swiper = new Swiper('.sneaker-slider', {
    grabCursor: true,
  centeredSlides: true,  
  spaceBetween: 10,
  loop:true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable:true,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
  });


// ---------- Header JS ------------
const login_btn = document.querySelector('.js-user')
const form = document.querySelector('.login')
const click_modal_close= document.querySelector('.close_js_btn')
const modal_form = document.querySelector('.js_modal_form')
function show_form_login() {
    form.classList.add('open')
}
function close_form_login() {
    form.classList.remove('open')
}
login_btn.addEventListener('click', show_form_login)
// // click vao X sẽ tắt form
form.addEventListener('click',close_form_login)
// click vao Khoảng không gian phía sau sẽ tắt form
click_modal_close.addEventListener('click',close_form_login)
// // chọn ra form để tránh hiện tượng nổi bọt

modal_form.addEventListener('click',function(event){
    event.stopPropagation()
})
/* ===============================================Open SigUp===============================================*/
const sig_up_btn = document.querySelector('.js-open-sig-up')
const take_sig_up = document.querySelector('.Sign-Up')
const close_btn = document.querySelector('.close_js_btn_sig_up')
const modal_not_close_form = document.querySelector(".js_modal_form_sig_up")
function open_form_Sig_up() {
    take_sig_up.classList.add('open')
}   
function close_form_Sig_up() {
    take_sig_up.classList.remove('open')
}
sig_up_btn.addEventListener('click',open_form_Sig_up)
sig_up_btn.addEventListener('click',close_form_login)
close_btn.addEventListener('click',close_form_Sig_up)
take_sig_up.addEventListener('click',close_form_Sig_up)
modal_not_close_form.addEventListener('click',function(event){
    event.stopPropagation()
})
/*===============================================Open search===============================================*/
const search = document.querySelector('.search-js')
const form_search = document.querySelector('.form-search')
const close_search = document.querySelector('.close-search')
function show_form_search() {
    form_search.classList.add('open')
}
function Turn_off_form_search() {
    form_search.classList.remove('open')
}
search.addEventListener('click',show_form_search)
close_search.addEventListener('click',Turn_off_form_search)



/*===============================================Cart items===============================================*/
const cart_btn = document.querySelector('.cart-js')
const cart_container = document.querySelector('.js-open-cart')
const close_cart = document.querySelector('.cart-close')
function On_form_cart() {
  cart_container.classList.add('open')
}
function Turn_off_form_cart() {
  cart_container.classList.remove('open')
}
cart_btn.addEventListener('click',On_form_cart)
close_cart.addEventListener('click',Turn_off_form_cart)


