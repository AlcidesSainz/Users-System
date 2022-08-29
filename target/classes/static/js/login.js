// Call the dataTables jQuery plugin
$(document).ready(function() {
//on ready
});

async function loginUsers(){
    let datas = {};
    datas.email = document.getElementById('txtEmail').value;
    datas.password= document.getElementById('txtPassword').value;

  
    const request = await fetch('api/login',{
        method:'POST',
        headers:{
        'Accept':'application/json',
        'Content-Type':'application/json'
     },
     body: JSON.stringify(datas)
});
const response = await request.text();
if (response != 'FAIL'){
    localStorage.token = response;
    localStorage.email = datas.email;
    window.location.href = 'users.html'
}else{
    alert("Your password and/or email are incorrect. Please try again")
}
}