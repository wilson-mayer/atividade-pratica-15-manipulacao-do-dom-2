let cardModificado = document.querySelectorAll(".card");
for (i = 0; i < 5; i++) {
  cardModificado[i].style.backgroundColor = "#e67e22";
}

let tituloCard = document.querySelectorAll(".titulo-card");
for (i = 0; i < 5; i++) {
  tituloCard[i].innerHTML = "Meu Card";
  tituloCard[i].style.color = "#2b385b";
}

let descricaoCard = document.querySelectorAll(".descricao-card");
for (i = 0; i < 5; i++) {
  descricaoCard[i].style.color = "white";
  descricaoCard[i].innerHTML = "Descrição modificada pelo JavaScript";
}

let botaoEditar = document.querySelectorAll(".botao-editar");
for (i = 0; i < 5; i++) {
  botaoEditar[i].style.color = "white";
  botaoEditar[i].style.backgroundColor = "green";
  botaoEditar[i].style.borderRadius = "5px";
}

let botaoApagar = document.querySelectorAll(".botao-apagar");
for (i = 0; i < 5; i++) {
  botaoApagar[i].style.color = "white";
  botaoApagar[i].style.backgroundColor = "red";
  botaoApagar[i].style.borderRadius = "5px";
}

function editarCard() {
  alert("Clicou em Editar!");
}

function apagarCard() {
  if (confirm("Você tem certeza da exclusão do Card?") == true) {
    alert("Confirmado!");
  } else {
    alert("Cancelou!");
  }
}
