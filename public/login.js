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
                window.location.href="/menu"
                miStorage.setItem('AccessToken',response.accessToken)
            }else{
                alert('Ingrese bien esa su mierda')
            }

        })
        .catch(function (error) {
            alert
            console.log(error);
        });
}