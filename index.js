function loadUsers() {
  fetch("https://gorest.co.in/public/v1/users")
    .then((res) => res.json())
    .then((data) => displayUsers(data.data));
}

function displayUsers(data){
    const ul = document.getElementById('users')
    for (const user of data) {
        console.log(user)
        const li = document.createElement('li');
        li.innerText =`
        Name : ${user.name}
        Gender : ${user.gender}
        email : ${user.email}
        status : ${user.status}
        
        `;
        ul.appendChild(li);

    }    
}
