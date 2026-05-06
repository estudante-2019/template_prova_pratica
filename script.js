// Preencher cabeçalho com os dados da prova
document.getElementById("data").textContent = prova.data;
document.getElementById("docente").textContent = prova.docente;
document.getElementById("curso").textContent = prova.curso;
document.getElementById("unidade").textContent = prova.unidade;
document.getElementById("turma").textContent = prova.turma;

const container = document.getElementById("questoes-container");

prova.itens.forEach((item, index) => {
  const div = document.createElement("div");
  div.className = "item";

  div.innerHTML = `
    <div class="item-titulo">ITEM ${index + 1}</div>
    <div class="item-capacidade">CAPACIDADE: ${item.capacidade}</div>
    <div class="item-contexto">${item.contexto}</div>
    <div class="item-pergunta">${item.pergunta}</div>
  `;

  if (item.alternativas.length > 0) {
    const alternativasDiv = document.createElement("div");
    alternativasDiv.className = "item-alternativas";
    item.alternativas.forEach((alt, i) => {
      const letra = String.fromCharCode(65 + i);
      const p = document.createElement("p");
      p.textContent = `${letra}) ${alt}`;
      alternativasDiv.appendChild(p);
    });
    div.appendChild(alternativasDiv);
  }

  container.appendChild(div);
});

// Função para imprimir a página (modo PDF)
document.getElementById("btn-imprimir").addEventListener("click", () => {
  const botao = document.getElementById("btn-imprimir");
  botao.style.display = "none";

  setTimeout(() => {
    window.print();
    setTimeout(() => {
      botao.style.display = "inline-block";
    }, 1000);
  }, 200);
});
