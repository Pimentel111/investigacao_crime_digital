import { perguntas } from "./perguntas.js";

const caixaPerguntas = document.querySelector(".caixa-perguntas");
const tituloPergunta = document.querySelector(".titulo-pergunta");
const textoPergunta = document.querySelector(".texto-pergunta");
const numeroPergunta = document.querySelector(".numero-pergunta");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaProgresso = document.querySelector(".caixa-progresso");
const textoProgresso = document.querySelector(".texto-progresso");
const trilhoProgresso = document.querySelector(".trilho-progresso");
const barraProgresso = document.querySelector(".progresso-preenchimento");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");
const tituloResultado = document.querySelector(".titulo-resultado");
const telaInicial = document.querySelector(".tela-inicial");
const botaoIniciar = document.querySelector(".iniciar-btn");
const botaoJogarNovamente = document.querySelector(".novamente-btn");
const botaoCreditos = document.querySelector(".creditos-btn");
const telaCreditos = document.querySelector(".tela-creditos");
const botaoVoltarInicio = document.querySelector(".voltar-inicio-btn");

let atual = 1;
let historiaFinal = [];
let faseDaPartida = "inicio";

botaoIniciar.addEventListener("click", iniciaJogo);
botaoJogarNovamente.addEventListener("click", reiniciaJogo);
botaoCreditos.addEventListener("click", mostraCreditos);
botaoVoltarInicio.addEventListener("click", reiniciaJogo);

function iniciaJogo() {
  reiniciaJogo();
  faseDaPartida = "jogando";

  telaInicial.style.display = "none";
  caixaProgresso.style.display = "block";
  caixaPerguntas.style.display = "block";
  caixaAlternativas.style.display = "flex";
  mostraPergunta();
}

function reiniciaJogo() {
  atual = 1;
  historiaFinal = [];
  faseDaPartida = "inicio";

  tituloPergunta.textContent = "";
  textoPergunta.textContent = "";
  numeroPergunta.textContent = "";
  textoProgresso.textContent = "";
  barraProgresso.style.width = "0%";
  caixaAlternativas.replaceChildren();
  tituloResultado.textContent = "";
  textoResultado.textContent = "";

  telaInicial.style.display = "block";
  caixaProgresso.style.display = "none";
  caixaPerguntas.style.display = "none";
  caixaAlternativas.style.display = "none";
  caixaResultado.style.display = "none";
  telaCreditos.style.display = "none";
  botaoCreditos.style.display = "none";
  botaoJogarNovamente.style.display = "inline-block";
  botaoJogarNovamente.textContent = "Recomeçar investigação";
}

function mostraPergunta() {
  const perguntaAtual = perguntas.find((pergunta) => pergunta.id === atual);

  if (!perguntaAtual) {
    console.error("Questão não encontrada:", atual);
    return;
  }

  const porcentagem = Math.round((atual / perguntas.length) * 100);
  numeroPergunta.textContent = `Cena ${String(atual).padStart(2, "0")}`;
  tituloPergunta.textContent = perguntaAtual.titulo;
  trilhoProgresso.setAttribute("aria-valuenow", atual);
  textoPergunta.textContent = perguntaAtual.enunciado;
  textoProgresso.textContent = `Cena ${atual} de ${perguntas.length}`;
  barraProgresso.style.width = `${porcentagem}%`;
  caixaAlternativas.replaceChildren();

  perguntaAtual.alternativas.forEach((alternativa, indice) => {
    const botao = document.createElement("button");
    const letra = String.fromCharCode(65 + indice);
    botao.textContent = `${letra}) ${alternativa.texto}`;
    botao.addEventListener("click", () => respostaSelecionada(alternativa, letra));
    caixaAlternativas.appendChild(botao);
  });
  tituloPergunta.focus({ preventScroll: true });
}

function respostaSelecionada(opcaoSelecionada, letra) {
  if (faseDaPartida !== "jogando") {
    return;
  }

  historiaFinal.push(`Cena ${atual} — ${letra}) ${opcaoSelecionada.texto}`);

  if (opcaoSelecionada.proxima === "fim") {
    mostraGameOver(opcaoSelecionada.mensagem);
    return;
  }

  if (opcaoSelecionada.proxima === "vitoria") {
    mostraVitoria(
      "A investigação foi concluída e o caso foi encaminhado com responsabilidade.",
    );
    return;
  }

  if (
    !Number.isInteger(opcaoSelecionada.proxima) ||
    !perguntas.some((pergunta) => pergunta.id === opcaoSelecionada.proxima)
  ) {
    console.error("Destino inválido:", opcaoSelecionada.proxima);
    historiaFinal.pop();
    return;
  }

  atual = opcaoSelecionada.proxima;
  mostraPergunta();
}

function mostraGameOver(mensagem) {
  faseDaPartida = "gameover";
  caixaProgresso.style.display = "none";
  caixaPerguntas.style.display = "none";
  caixaAlternativas.replaceChildren();
  caixaAlternativas.style.display = "none";
  caixaResultado.style.display = "block";
  tituloResultado.textContent = "INVESTIGAÇÃO INTERROMPIDA";
  textoResultado.textContent =
    mensagem + "\n\nSuas escolhas nesta tentativa:\n" + historiaFinal.join("\n");
  botaoJogarNovamente.textContent = "Recomeçar do início";
  botaoJogarNovamente.style.display = "inline-block";
  botaoCreditos.style.display = "none";
  telaCreditos.style.display = "none";
}

function mostraVitoria(mensagem) {
  if (faseDaPartida !== "jogando") {
    return;
  }

  faseDaPartida = "vitoria";
  caixaProgresso.style.display = "none";
  caixaPerguntas.style.display = "none";
  caixaAlternativas.replaceChildren();
  caixaAlternativas.style.display = "none";
  caixaResultado.style.display = "block";
  tituloResultado.textContent = "CASO CONCLUÍDO";
  textoResultado.textContent =
    mensagem + "\n\nResumo da investigação:\n" + historiaFinal.join("\n");
  botaoJogarNovamente.style.display = "none";
  botaoCreditos.style.display = "inline-block";
  telaCreditos.style.display = "none";
}

function mostraCreditos() {
  if (faseDaPartida !== "vitoria") {
    return;
  }

  faseDaPartida = "creditos";
  telaInicial.style.display = "none";
  caixaProgresso.style.display = "none";
  caixaPerguntas.style.display = "none";
  caixaAlternativas.style.display = "none";
  caixaResultado.style.display = "none";
  telaCreditos.style.display = "block";
}

reiniciaJogo();
