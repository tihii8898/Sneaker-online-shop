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
// click vao X sẽ tắt form
form.addEventListener('click',close_form_login)
// click vao Khoảng không gian phía sau sẽ tắt form
click_modal_close.addEventListener('click',close_form_login)
// chọn ra form để tránh hiện tượng nổi bọt

modal_form.addEventListener('click',function(event){
    event.stopPropagation()
})


/* =========Open search============*/
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



