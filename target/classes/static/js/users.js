// Call the dataTables jQuery plugin
$(document).ready(function() {
    loadUsers();
  $('#users').DataTable();
  reloadUserEmail();
});
function reloadUserEmail(){
document.getElementById('txt-email-user').outerHTML = localStorage.email;
}

function getHeaders(){
return{
                  'Accept':'application/json',
                  'Content-Type':'application/json',
                  'Authorization':localStorage.token
               };
}

async function loadUsers(){
    const request = await fetch('api/users',{
        method:'GET',
        headers:getHeaders()
});
const users = await request.json();
let listadoHtml = ''
for(let user of users){
let deleteButton = '<a href="#" onclick="deleteUser(' + user.id + ')" class="btn btn-danger btn-circle btn-sm"><i class="fas fa-trash"></i></a>';
let phone = user.phone == null ? '-' : user.phone;
let userHtml = '<tr><td>'+user.id+'</td><td>'+user.name+ ' ' +user.lastName+'</td><td>'+user.email+'</td><td>'
+phone+'</td><td>'+deleteButton+'</td></tr>';
listadoHtml +=userHtml;
}
document.querySelector('#users tbody').outerHTML = listadoHtml
}
async function deleteUser(id) {

 if (!confirm('¿Do you want to delete this user?')) {
    return;
  }


 const request = await fetch('api/users/' + id, {
    method: 'DELETE',
      headers:getHeaders()
  });

  location.reload()
}
