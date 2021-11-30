// Top 1



var menName = document.getElementById('name-top-1-men')
var menEarn = document.getElementById('earn-top-1-men')
var menDay = document.getElementById('day-top-1-men')
var womenName = document.getElementById('name-top-1-women')
var womenEarn = document.getElementById('earn-top-1-women')
var womenDay = document.getElementById('day-top-1-women')
var childName = document.getElementById('name-top-1-child')
var childEarn = document.getElementById('earn-top-1-child')
var childDay = document.getElementById('day-top-1-child')

const Top1 = () => {
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
    menEarn.innerText = `Doanh thu:  ${menValue.earn} VND`
    womenEarn.innerText = `Doanh thu:   ${womenValue.earn} VND`
    childEarn.innerText = `Doanh thu:   ${childValue.earn} VND`

    // day release
    menDay.innerText = `Ngày mở bán: ${menValue.day}`
    womenDay.innerText = `Ngày mở bán: ${womenValue.day}`
    childDay.innerText = `Ngày mở bán: ${childValue.day}`
}


Top1()

// table 



const tableRow = () => {
    let tr = document.createElement('tr')

    let codeRow = document.createElement('td')
    let nameRow = document.createElement('td')
    let releaseRow = document.createElement('td')
    let statusRow = document.createElement('td')
    let amountRow = document.createElement('td')
    let sellingRow = document.createElement('td')
    
    let list = [codeRow,nameRow,releaseRow,statusRow,amountRow,sellingRow]

    //code
    let codeText = document.createTextNode('123')
    let code = document.createElement('a')
    code.href = '#'
    code.classList.add('tr-code')
    code.appendChild(codeText)
    codeRow.appendChild(code)

    //name 
    let nameText = document.createTextNode('bitis')
    nameRow.appendChild(nameText)
    nameRow.classList.add('tr-name')

    //release
    let releaseText = document.createTextNode('20-11-2021')
    releaseRow.appendChild(releaseText)
    releaseRow.classList.add('tr-release')

    //status
    let statusText = document.createTextNode('Còn hàng')
    statusRow.classList.add('status','status-available')
    statusRow.appendChild(statusText)

    //amount

    let amountText = document.createTextNode('3000000')
    amountRow.appendChild(amountText)
    amountRow.classList.add('tr-amount')

    //selling

    sellingRow.classList.add('tr-selling')
    let cbx = document.createElement('input')
    cbx.type = 'checkbox'
    sellingRow.appendChild(cbx)

    for (let index = 0; index < list.length; index++) {
        tr.appendChild(list[index])
        
    }
    return tr
}

var a = document.getElementById('tb-body')
a.appendChild(tableRow())
console.log(a)