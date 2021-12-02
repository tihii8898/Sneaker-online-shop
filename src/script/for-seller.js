let list = document.querySelectorAll('.nav li');
let clear = document.querySelectorAll('.left-nav')


function activeLink () {
    list.forEach((item) => 
        item.classList.remove('activated'));
    clear.forEach((item) => item.classList.remove('open'))
    this.classList.add('activated');
    let name = this.className.split('-')[0];
    console.log(name)
    let element = document.querySelector(`.${name}`)
    console.log(element)
    element.classList.add('open')
    
}
    
list.forEach((item) => 
    item.addEventListener('click',activeLink)
);



