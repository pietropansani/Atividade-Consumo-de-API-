const foto = document.getElementById("foto");
const botao = document.getElementById("botao");

async function carregarHusky() {
  const resposta = await fetch("https://dog.ceo/api/breed/husky/images/random");
  const dados = await resposta.json();
  foto.src = dados.message;
}

botao.addEventListener("click", carregarHusky);
carregarHusky();