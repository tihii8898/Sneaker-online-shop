let labels = ['10/2021','11/2021','12/2021','1/2022','2/2022','3/2022','4/2022',]

const ctx = document.getElementById('myChart').getContext('2d');
const myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: labels,
        datasets: [{
            label: 'Sell by month',
            data: [10, 90, 120, 300, 450, 350, 400],
            fill: false,
            borderColor: 'rgb(242, 240, 19)',
            tension: 0.1
          }]
    },
    options: {
        responsive:true,
    }
});


const openChangeInfo = () => {
    let input = document.querySelectorAll('input')
    input.forEach((item) => {
        item.setAttribute('style','visibility: visible')
    })
    let edit = document.getElementById('pen')
    edit.setAttribute('style', 'visibility: hidden')
    let btn = document.getElementById('change-info')
    btn.setAttribute('style','visibility: visible')

}

var edit = document.getElementById('pen')
edit.addEventListener('click',openChangeInfo)

const submitChange = () => {
    confirm('Bạn có chắc muốn thay dổi ?')
    let input = document.querySelectorAll('input')
    let labels = document.querySelectorAll('label')
    input.forEach((item ) => {
        if (item.value !== '') {
            const tag = item.id.split(' ')[1]
            labels.forEach((label) => {
                if (label.id.split(' ')[1] === tag) {
                    label.innerText = item.value
                }
            })
        }
    })

    input.forEach((item) => {
        item.setAttribute('style','visibility: hidden')
        item.value = ''
    })
    let edit = document.getElementById('pen')
    let btn = document.getElementById('change-info')
    edit.setAttribute('style','visibility: visible')
    btn.setAttribute('style','visibility: hidden')

}


var btn = document.getElementById('change-info')
btn.addEventListener('click',submitChange)



// Product session



var menName = document.getElementById('name-top-1-men')
var menEarn = document.getElementById('earn-top-1-men')
var menDay = document.getElementById('day-top-1-men')
var womenName = document.getElementById('name-top-1-women')
var womenEarn = document.getElementById('earn-top-1-women')
var womenDay = document.getElementById('day-top-1-women')
var childName = document.getElementById('name-top-1-child')
var childEarn = document.getElementById('earn-top-1-child')
var childDay = document.getElementById('day-top-1-child')

const defaultTop1 = () => {
    menValue = {
        name: 'DSMH06301DEN',
        earn: 10000000,
        day: '28-10-2021'
    }
    womenValue = {
        name:'DSWH06400XDG',
        earn: 2000000,
        day: '30-10-2021'
    }
    childValue = {
        name:'TE1030ABC901',
        earn: 3000000,
        day: '1-11-2021'
    }

    //name
    menName.innerHTML  =`Mã sản phẩm: ${menValue.name}`
    womenName.innerText =`Mã sản phẩm: ${womenValue.name}`
    childName.innerText = `Mã sản phẩm: ${childValue.name}`

    //earn
    menEarn.innerText = `Thu nhập:  ${menValue.earn} VND`
    womenEarn.innerText = `Thu nhập:   ${womenValue.earn} VND`
    childEarn.innerText = `Thu nhập:   ${childValue.earn} VND`

    // day release
    menDay.innerText = `Ngày mở bán: ${menValue.day}`
    womenDay.innerText = `Ngày mở bán: ${womenValue.day}`
    childDay.innerText = `Ngày mở bán: ${childValue.day}`
}
defaultTop1()
