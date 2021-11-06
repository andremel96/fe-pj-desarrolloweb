const url = 'https://be-pj-desarrolloweb.herokuapp.com' 

const miStorage = window.localStorage;

const login = () => {
    let formularioLogin = document.getElementById('formulario-login');
    console.log(formularioLogin);
    fetch(url + '/login', {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
          },
        body: JSON.stringify({ user_name: formularioLogin.username.value, password: formularioLogin.password.value })
    })
        .then((res) => res.json())
        .then(function (response) {
            console.log(response);
            if(response.status==='success') {
                miStorage.setItem('AccessToken',response.accessToken)
                window.location.href="/menu"
            }else{
                alert('Ingrese bien esa su informacion')
            }

        })
        .catch(function (error) {
            alert("Ha ocurrido un error")
            console.log(error);
        });
}