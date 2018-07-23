
$('#navbar').load('navbar.html');

const devices = JSON.parse(localStorage.getItem('devices')) || [];
const user= JSON.parse(localStorage.getItem('user')) || [];

devices.forEach(function(device) {
    const table = document.querySelector('#devices');
    const row = document.createElement('tr');
    const user = document.createElement('td');
    const userText = document.createTextNode(device.user);
    user.appendChild(userText);
    const name = document.createElement('td');
    const nameText = document.createTextNode(device.name);
    name.appendChild(nameText);
    row.appendChild(user);
    row.appendChild(name);
    table.appendChild(row);
    });

   
    /*document.querySelector('#add-device').addEventListener('click',
function() {
const user = document.querySelector('#user').value;
const name = document.querySelector('#name').value;
devices.push({ user: user, name: name });
localStorage.setItem('devices', JSON.stringify(devices));
location.href = '/';
});

$('#send-command').on('click', function() {
    const command = $('#command').val();
    console.log(`command is: ${command}`);
    });
