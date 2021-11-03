const url = 'https://be-pj-desarrolloweb.herokuapp.com'
let user_list = 'https://be-pj-desarrolloweb.herokuapp.com/users/'

const generateRequest =(value, path, requestType) => {
    return fethc (url + path),{ 
        method: requestType, 
        body: JSON.stringify(fillobject(value)),
        headers:{
            'accept': 'application/json',
            'content-type': 'application/json'
        },
    }
}

// const getUsers = () => {
//     const users = document.getElementById("UsersGet");
//     let usersGet = users.value;
//     if(usersGet){
//         generateRequest(
//             {value: usersGet},
//             'getAllUsers',
//             'POST')
//             .then((res) => res.json())
//             .then((data) => {
//                 generateTable(data)
//             });
//     }else {
//         alert('No hay ususarios ingresados')
//     }
// }
const cargarUsers = () => {
    fetch(
        user_list 
    )
      .then((res) => res.json())
      .then((data) => {
        main.innerHTML = "";
        data.genres.forEach((item) => {
        generateTable(item.id_UserName, item.iduserNumero, 
            item.user_name, item.name, item.last_name);
        });
      });
  }

const generateTable = (data) => {
    const table = document.getElementById("UsersList");
    table.innerHTML = "";
    data.replies[0].content.forEach(e => {
        let row = table.insertRow();
        let id_UserName = row.insertCell(0);
        id_UserName.innerHTML = e.id_UserName;
        let iduserNumero = row.insertCell(1);
        iduserNumero.innerHTML = e.iduserNumero;
        let user_name = row.insertCell(2);
        user_name.innerHTML = e.user_name;
        let name = row.insertCell(3);
        name.innerHTML = e.name;
        let last_name = row.insertCell(4);
        last_name.innerHTML = e.last_name;
    })
}