function logar(){
    var login = document.querySelector("#login")
    var password = document.querySelector("#password")
    if (login.value == "bigode" && password.value == "123"){
        localStorage.setItem("acesso", true)
        location.href = "home.html"
        alert("sucesso!")
    }else{
        alert("login ou senha incorreto!")
    }
}

