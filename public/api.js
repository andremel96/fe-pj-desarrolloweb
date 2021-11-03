const url = 'https://be-pj-desarrolloweb.herokuapp.com'
let user_list = 'https://be-pj-desarrolloweb.herokuapp.com/users/'

const generateRequest = (value, path, requestType) => {
    return fethc(url + path), {
        method: requestType,
        body: JSON.stringify(fillobject(value)),
        headers: {
            'accept': 'application/json',
            'content-type': 'application/json'
        },
    }
}

const cargarUsers = () => {
    fetch(
        user_list
    )
        .then((res) => res.json())
        .then((data) => {
            // main.innerHTML = "";
            console.log(data);
            const table = document.getElementById("UsersList");
            table.innerHTML = "";
            data.user.forEach((item) => {
                generateTable(item, table);
            });
        });
}

const generateTable = (e, table) => {
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
}


const cargarCurso = () => {
    fetch(
        user_list
    )
        .then((res) => res.json())
        .then((data) => {
            // main.innerHTML = "";
            console.log(data);
            const table = document.getElementById("CursoList");
            table.innerHTML = "";
            data.user.forEach((item) => {
                generateTable(item, table);
            });
        });
}

const generateTable = (e, table) => {
    let row = table.insertRow();
    let idcurso = row.insertCell(0);
    idcurso.innerHTML = e.idcurso;
    let idcursoNumero = row.insertCell(1);
    idcursoNumero.innerHTML = e.idcursoNumero;
    let name_curso = row.insertCell(2);
    name_curso.innerHTML = e.name_curso;
    
}