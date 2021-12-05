// Top 1









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
    
    var menName = document.getElementById('name-top-1-men')
    var menEarn = document.getElementById('earn-top-1-men')
    var menDay = document.getElementById('day-top-1-men')
    var womenName = document.getElementById('name-top-1-women')
    var womenEarn = document.getElementById('earn-top-1-women')
    var womenDay = document.getElementById('day-top-1-women')
    var childName = document.getElementById('name-top-1-child')
    var childEarn = document.getElementById('earn-top-1-child')
    var childDay = document.getElementById('day-top-1-child')
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

var products = [
    {   
        code:'DSMH06301DEN',
        name: 'Giày Thể Thao Nam Biti’s Hunter X Z MIDNIGHT BLACK MID - TOP DSMH06301DEN (Đen)',
        dayRelease: new Date(2021,10,25,0,0,0,0),
        inStorage: 30,
        waiting:false,
        amount:10000000,
        selling:true,
        price: 1999000,
        
    },
    {
        code:'DSMH03801XDG',
        name: 'Giày Bóng Đá Nam Biti\'s Hunter Football DSMH03801XDG (Xanh Dương)',
        dayRelease: new Date(2021,11,20,0,0,0,0),
        inStorage: 0,
        waiting:false,
        amount:650000,
        selling:true,
        price: 699000,
        
    },
    {
        code:'DSWH06400XDG',
        name: 'Giày Thể Thao Nữ Biti’s Hunter Core Z Collection Sea DSWH06400XDG (Xanh Dương)',
        dayRelease: new Date(2021,11,18,0,0,0,0),
        inStorage: 0,
        waiting:true,
        amount:699000,
        selling:true,
        price: 1099000,
        
    },
    {
        code:'DEM010400DEN',
        name: 'Dép Eva Phun Nam Biti\'s DEM010400DEN (Đen)',
        dayRelease:new Date(2021,10,20,0,0,0,0),
        inStorage: 300,
        waiting:false,
        amount:99000,
        selling:false,
        price: 199000,
        
    },
    {
        code:'DSWH08400NAU',
        name: 'Giày Thể Thao Nữ Biti\'s Hunter Street x VietMax | Bloomin\' Central (1 ĐÔI GIÀY - 3 BIẾN THỂ) DSWH08400NAU (Phiên bản giới hạn Đồng xu cổ cho 999 đơn hàng đầu tiên)',
        dayRelease: new Date(2021,10,30),
        inStorage: 90,
        waiting:false,
        amount:1999000,
        selling:true,
        price:1999000,
        
        
    }

]

const tableRow = (item) => {
    let tr = document.createElement('tr')

    let codeRow = document.createElement('td')
    let nameRow = document.createElement('td')
    let releaseRow = document.createElement('td')
    let statusRow = document.createElement('td')
    let amountRow = document.createElement('td')
    let sellingRow = document.createElement('td')
    
    let list = [codeRow,nameRow,releaseRow,statusRow,amountRow,sellingRow]

    //code
    let codeText = document.createTextNode(item.code)
    let code = document.createElement('a')
    code.href = '#'
    code.classList.add('tr-code')
    code.appendChild(codeText)
    codeRow.appendChild(code)

    //name 
    let nameText = document.createTextNode(item.name)
    nameRow.appendChild(nameText)
    nameRow.classList.add('tr-name')

    //release
    let releaseText = document.createTextNode(item.dayRelease.toDateString())
    releaseRow.appendChild(releaseText)
    releaseRow.classList.add('tr-release')

    //status
    let statusText = null
    statusRow.classList.add('status')
    if (item.waiting){
        statusText = document.createTextNode('Chờ hàng')
        statusRow.classList.add('status-waiting')
    }
    else{
        if (item.inStorage > 0 ){
    
            statusText = document.createTextNode('Còn hàng')
            statusRow.classList.add('status-available')
        }
        else {
            statusText = document.createTextNode('Hết hàng')
            statusRow.classList.add('status-sold-out')
        }
    }
    statusRow.appendChild(statusText)

    //amount

    let amountText = document.createTextNode(item.amount)
    amountRow.appendChild(amountText)
    amountRow.classList.add('tr-amount')

    //selling

    sellingRow.classList.add('tr-selling')
    let cbx = document.createElement('input')
    cbx.type = 'checkbox'
    cbx.checked = item.selling
    sellingRow.appendChild(cbx)

    for (let index = 0; index < list.length; index++) {
        tr.appendChild(list[index])
        
    }
    return tr
}

var tableBody = document.getElementById('tb-body')
for (const item of products) {
    tableBody.appendChild(tableRow(item))

}


var a = document.querySelectorAll('.tr-code')


function productEdit() {
    let form = document.querySelector('.product-edit-form')
    a.forEach(item => { 
        form.classList.remove(item.innerHTML)
    })
    
    let thisProduct = {}
    products.forEach(product => {
       if( product.code === this.innerHTML) {
           thisProduct = product
       }
    })
    form.style.display = 'block'
    let thisCode = form.children[0].children[1]
    let thisName = form.children[0].children[2]
    let thisPrice = form.children[0].children[3]
    let thisRelease = form.children[0].children[4]
    let thisStatus = form.children[0].children[5]
    let thisSelling = form.children[0].children[6]
    let thisButton = form.children[0].children[7]
    

    let codeInput = thisCode.children[1]
    let nameInput = thisName.children[1]
    let priceInput = thisPrice.children[1]
    let releaseInput = thisRelease.children[1]
    let statusInput = thisStatus.children[1]
    let sellingInput = thisSelling.children[1]
    codeInput.placeholder = thisProduct.code
    nameInput.placeholder = thisProduct.name
    priceInput.placeholder = thisProduct.price
    releaseInput.innerHTML = thisProduct.dayRelease.toDateString()
    if (thisProduct.waiting) {
        statusInput.innerText = 'Chờ hàng'
        statusInput.style.color = '#a68b00'
    }
    else if (thisProduct.inStorage > 0) {
        statusInput.innerText = 'Còn hàng'
        statusInput.style.color = '#388e3c'
    }
    else {
        statusInput.innerText = 'Hết hàng'
        statusInput.style.color = '#c62828'
    }

    if (thisProduct.selling) {
        sellingInput.checked = 'checked'
    }
    
    let saveBtn = thisButton.children[0]
    let exitBtn = thisButton.children[1]

    const changeProductInfo = () => {
        products.forEach(product => {
            if (product.code === thisProduct.code){
                product.code = codeInput.value
                product.name = nameInput.value
                product.price = priceInput.value

                codeInput.value = ''
                nameInput.value = ''
                priceInput.value = ''
            }
            
        })

        form.style.display = 'none'
    }

    saveBtn.addEventListener('click',changeProductInfo)

    
    const exit = () => {
        form.style.display = 'none'
    }
    exitBtn.addEventListener('click',exit)




}

a.forEach(item => 
    item.addEventListener('click',productEdit)
    
    )


let b = new Date(2021,10,10,0,0,0,0)
console.log(b)