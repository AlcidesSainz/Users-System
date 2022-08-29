// Call the dataTables jQuery plugin
$(document).ready(function() {
//on ready
});

async function signUpUsers(){
    let datas = {};
    datas.name = document.getElementById('txtFirstName').value;
    datas.lastName = document.getElementById('txtLastName').value;
    datas.email = document.getElementById('txtEmail').value;
    datas.password= document.getElementById('txtPassword').value;

    let repeatPassword = document.getElementById('txtRepeatPassword').value;

    if(repeatPassword != datas.password){
        alert('The password does not match')
        return;
    }

    const request = await fetch('api/users',{
        method:'POST',
        headers:{
        'Accept':'application/json',
        'Content-Type':'application/json'
     },
     body: JSON.stringify(datas)
});
    alert("Account Created Successfully")
    window.location.href = 'login.html'
}
