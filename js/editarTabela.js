var geraCodigo = document.querySelector("#gerar-codigo")
var areaCodigo = document.querySelector("#codigo_mostrar")
var tabelaStr = ""
var secCodigo = document.querySelector("#codigo");

tabela.addEventListener('click', (evento) => {
    let celula = evento.target
    celula.contentEditable = true //torna a célula editável
    celula.focus(); // Coloca o foco na célula
    document.execCommand('selectAll', false, null); // Seleciona todo o conteúdo da célula
})

tabela.addEventListener('blur', (evento) => {
    let celula = evento.target
    celula.contentEditable = false
})

geraCodigo.addEventListener('click', () => {
    tabelaStr = tabela.outerHTML
    tabelaStr = tabelaStr.replace(/<\/table>/g, "\n</table>")
    tabelaStr = tabelaStr.replace(/(<.{0,1}tr>)/g, "\n\t$1")
    tabelaStr = tabelaStr.replace(/<th>/g, "\n\t\t<th>")
    tabelaStr = tabelaStr.replace(/<td>/g, "\n\t\t<td>")

    areaCodigo.textContent = tabelaStr
    secCodigo.classList.remove("oculto")
    rolarPag("#codigo")
})