// Função para carregar os órgãos
function carregarOrgaos() {
    var token = localStorage.getItem("authToken"); // Obtém o token do localStorage
    fetch("/apis/cidadao/listar-orgaos", {
        headers: {
            'Authorization': token
        }
    })
        .then(response => response.json())
        .then(data => {
            var selectOrgao = document.getElementById("orgao");
            // Limpa as opções anteriores do select
            selectOrgao.innerHTML = "";
            // Preenche o select com os órgãos obtidos
            data.forEach(orgao => {
                var option = document.createElement("option");
                option.text = orgao.nome;
                option.value = orgao.id;
                selectOrgao.appendChild(option);
            });
        })
        .catch(error => console.error('Erro ao carregar os órgãos:', error));
}

// Função para carregar os tipos
function carregarTipos() {
    var token = localStorage.getItem("authToken"); // Obtém o token do localStorage
    fetch("/apis/cidadao/listar-tipos", {
        headers: {
            'Authorization': token
        }
    })
        .then(response => response.json())
        .then(data => {
            var selectTipo = document.getElementById("tipo");
            // Limpa as opções anteriores do select
            selectTipo.innerHTML = "";
            // Preenche o select com os tipos obtidos
            data.forEach(tipo => {
                var option = document.createElement("option");
                option.text = tipo.nome;
                option.value = tipo.id;
                selectTipo.appendChild(option);
            });
        })
        .catch(error => console.error('Erro ao carregar os tipos:', error));
}

document.addEventListener("DOMContentLoaded", function() {
    carregarOrgaos();
    carregarTipos();

    document.querySelector("form").addEventListener("submit", function(event) {
        event.preventDefault();

        var titulo = document.getElementById("titulo").value;
        var descricao = document.getElementById("descricao").value;
        var urgencia = document.getElementById("urgencia").value;
        var orgaoId = document.getElementById("orgao").value;
        var tipoId = document.getElementById("tipo").value;
        var usuarioId = null; // Id do usuário obtido de forma apropriada (ajuste conforme necessário)
        var data = new Date().toISOString().split('T')[0]; // Obtém a data atual no formato 'YYYY-MM-DD'

        //token de acesso
        var token = localStorage.getItem("authToken");
        //decodificar token
        function parseJwt(token) {
            var base64Url = token.split('.')[1];
            var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
            var jsonPayload = decodeURIComponent(atob(base64).split('').map(function(c) {
                return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
            }).join(''));

            return JSON.parse(jsonPayload);
        }

        // Extrair o e-mail do usuário do token decodificado
        usuarioId = parseJwt(token).sub;        //pega o ID desse email para enviar o ID para o backend

        var token = localStorage.getItem("authToken");

        var denuncia = {
            titulo: titulo,
            descricao: descricao,
            urgencia: parseInt(urgencia),
            orgaoId: parseInt(orgaoId),
            tipoId: parseInt(tipoId),
            data: data,
            usuarioId: usuarioId
        };

        fetch("/apis/cidadao/enviar-denuncias", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': token
            },
            body: JSON.stringify(denuncia)
        })
            .then(response => {
                if (response.ok) {
                    window.location.href = "/minhas-denuncias.html";
                } else {
                    alert("Erro ao cadastrar a denúncia. Por favor, tente novamente.");
                }
            })
            .catch(error => console.error('Erro ao cadastrar a denúncia:', error));
    });
});