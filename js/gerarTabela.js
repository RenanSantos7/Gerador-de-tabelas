const numColunas = document.querySelector("#input-colunas");
const numLinhas = document.querySelector("#input-linhas");
const qtColuna = numColunas.value == '' ? 2 : numColunas.value
const qtLinha = numLinhas.value == '' ? 3 : numLinhas.value
const secEditTab = document.querySelector("#editar-tabela");
const btGerar = document.querySelector("#botao-gerador");
const localTabela = document.querySelector("#tabela-editavel");
const checkSentido = document.querySelector("#vertical")
const checkHorizontal = document.querySelector("#horizontal")
const tabela = document.createElement("table")

btGerar.addEventListener('click', (event) => {
	montaTabela()
	localTabela.appendChild(tabela)
	secEditTab.classList.remove("oculto")
	rolarPag("#editar-tabela")
})

function montaCelula(tipo){
    let celula = document.createElement(tipo);
    celula.textContent = "Clique para editar"
	return celula
}

function montaTabela() {
	if (checkSentido.checked) {
		montarTabelaVertical();
	} else {
		montarTabelaHorizontal()
	}
}

function montarTabelaVertical() {
	// cria o cabeçalho
	let tr = document.createElement("tr");
	for (let i = 0; i < qtColuna; i++) {
		tr.appendChild(montaCelula("th"));
		tabela.appendChild(tr);
	}
	// corpo de tabela
	for (let i = 1; i < qtLinha; i++) {
		tr = document.createElement("tr");
		for (let c = 0; c < qtColuna; c++) {
			tr.appendChild(montaCelula("td"));
		}
		tabela.appendChild(tr);
	}
}

function montarTabelaHorizontal() {
	for (let i = 0; i < qtLinha; i++) {
		let tr = document.createElement("tr");
		tr.appendChild(montaCelula("th"))
		for (let c = 1; c < qtColuna; i++) {
			tr.appendChild(montaCelula("td"))
		}
		tabela.appendChild(tr);
	}
}

checkHorizontal.addEventListener('click', () => {
	montarTabelaHorizontal()
})

function rolarPag(id) {
	window.scrollTo({
		top: document.querySelector(id).offsetTop,
		behavior: "smooth"
	  });
}