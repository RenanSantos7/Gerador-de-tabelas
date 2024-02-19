var numColunas = document.querySelector("#input-colunas");
var numLinhas = document.querySelector("#input-linhas");
var secEditTab = document.querySelector("#editar-tabela");
var btGerar = document.querySelector("#botao-gerador");
var localTabela = document.querySelector("#tabela-editavel");
var checkSentido = document.querySelector("#vertical")
var tabela = document.createElement("table")

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
    let sentido

    if (checkSentido.checked) {
        sentido = "vertical"
    } else {
        sentido = "horizontal"
    }

	if (sentido == "vertical") {
		// cria o cabeçalho
		let tr = document.createElement("tr")
        for (let i = 0; i < numColunas.value; i++) {
			tr.appendChild(montaCelula("th"))
			tabela.appendChild(tr)
		}
		// corpo de tabela
        for (let i = 1; i < numLinhas.value; i++) {
			tr = document.createElement("tr")
            for (let c = 0; c < numColunas.value; c++) {
				tr.appendChild(montaCelula("td"))
			}
			tabela.appendChild(tr)
		}
	}
}

function rolarPag(id) {
	window.scrollTo({
		top: document.querySelector(id).offsetTop,
		behavior: "smooth"
	  });
}