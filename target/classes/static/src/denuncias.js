
// Função para carregar as denúncias da API
function carregarDenuncias() {
    var xhr = new XMLHttpRequest();
    var token = localStorage.getItem("authToken"); // Obtém o token do localStorage
    xhr.open("GET", "/apis/adm/get-all-denuncias");
    xhr.setRequestHeader("Authorization", token); // Adiciona o token ao cabeçalho da solicitação
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4) {
            if (xhr.status === 200) {
                var denuncias = JSON.parse(xhr.responseText);
                preencherTabela(denuncias);
            } else {
                console.error("Erro ao carregar denúncias");
            }
        }
    };
    xhr.send();
}

// Função para preencher a tabela com as denúncias
function preencherTabela(denuncias) {
    var tbody = document.querySelector("tbody");
    tbody.innerHTML = ""; // Limpa o conteúdo atual da tabela

    denuncias.forEach(function(denuncia) {
        var tr = document.createElement("tr");
        tr.innerHTML = `
            <td>${denuncia.titulo}</td>
            <td>${denuncia.texto}</td>
            <td>${denuncia.urgencia}</td>
            <td>${denuncia.orgao.nome}</td>
            <td>${denuncia.data}</td>
            <td>${denuncia.tipo.nome}</td>
            <td>${denuncia.usuario.email}</td>
            <td>
                <button onclick="darFeedback(${denuncia.id})">FeedBack</button>
                <button onclick="excluirDenuncia(${denuncia.id})">Excluir</button>
            </td>
        `;
        tbody.appendChild(tr);
    });
}

function darFeedback()
{

}

// Função para excluir uma denúncia

function excluirDenuncia(id) {
    // Faz uma requisição DELETE para o endpoint de exclusão de denúncia
    var token = localStorage.getItem("authToken");

    fetch(`/apis/adm/delete-denuncia?id=${id}`, {
        method: 'DELETE',
        headers: {
            'Authorization': token
        }
    })
        .then(response => {
            // Verifica se a requisição foi bem-sucedida
            if (response.ok) {
                // Recarrega a página após excluir a denúncia
                location.reload();
            } else {
                // Caso contrário, exibe uma mensagem de erro
                alert("Erro ao excluir a denúncia. Por favor, tente novamente.");
            }
        })
        .catch(error => console.error('Erro ao excluir a denúncia:', error));
}


document.addEventListener("DOMContentLoaded", function() {
    // Chama a função para carregar as denúncias quando a página HTML for carregada
    carregarDenuncias();
});
