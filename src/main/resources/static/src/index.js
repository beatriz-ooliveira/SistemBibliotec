// index.js

function login(event) {
    event.preventDefault(); // Impede o envio do formulário padrão

    var email = document.getElementById("email").value;
    var senha = document.getElementById("senha").value;

    var xhr = new XMLHttpRequest();
    xhr.open("POST", "http://localhost:8080/apis/security/logar/"); // Adicionado o protocolo 'http://' antes do endereço
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4) {
            if (xhr.status === 200) {
                var token = xhr.responseText;
                localStorage.setItem("authToken", token); // Armazena o token no localStorage
                verificarPapelUsuario(token);
            } else {
                alert("Credenciais inválidas. Por favor, tente novamente.");
            }
        }
    };
    var data = JSON.stringify({ "email": email, "senha": senha });
    xhr.send(data);
}

function verificarPapelUsuario(token) {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "http://localhost:8080/apis/security/verificar-papel/");
    xhr.setRequestHeader("Authorization", token);
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4) {
            if (xhr.status === 200) {
                var nivel = xhr.responseText;
                if (nivel == 2) {
                    window.location.href = "cidadao.html"; // Redireciona para a página do cidadão
                } else if (nivel == 1) {
                    window.location.href = "admin.html"; // Redireciona para a página do administrador
                } else {
                    alert("nivel do usuário inválido. Por favor, tente novamente.");
                }
            } else {
                alert("Erro ao verificar nivel do usuário. Por favor, tente novamente.");
            }
        }
    };
    xhr.send();
}
