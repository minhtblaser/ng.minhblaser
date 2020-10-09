function checkup() {
 
    var data = new Array();
    data[0] = document.getElementById('account').value;
    data[1] = document.getElementById('password').value;

    var myerror = new Array();
    myerror[0] = "<span style='color:red,font-weight:bold'>Bạn chưa nhập tên</span>";
    myerror[1] = "<span style='color:red,font-weight:bold'>Bạn chưa nhập mật khẩu</span>";
   
 
    var nearby = new Array("z-name", "z-password");
 
    for (i in data) {
        var error = myerror[i];
        var div = nearby[i];
 
        if (data[i]=="") {
            document.getElementById(div).innerHTML = error;
        } else {
            document.getElementById(div).innerHTML = "OK!";
        }
    }
 
}