const btnChange = document.getElementById("tk-btn-submit");

function check(){
    var fullName = document.getElementById("fullName").value;
    var number = document.getElementById("number").value;
    var sex = document.getElementById("sex").value;
    var addr = document.getElementById("address").value;
    var email = document.getElementById("email").value;
    var checkData=true;

    if(fullName== "") {
    alert("Vui lòng nhập tên!");
    checkData= false;
    }
    if(number == "") {
    alert("Vui lòng nhập số điện thoại");
    checkData= false;
    }
    if(sex == "") {
    alert("Vui lòng xác minh giới tính!");
    checkData= false;
    }
    if(addr == ""){
    alert("Vui lòng xác minh địa chỉ!");
        checkData= false;
    }
    if(email == "") {
        alert("Vui lòng xác minh email!");
        checkData= false;
    }
}

btnChange.addEventListener('click', completeChange)
function completeChange() {
let isVaild = check(); 
if (isVaild) {

    alert("Chỉnh sửa thành công");
}
};
