var copia = document.querySelector("#copiar")
var copiaTexto = document.querySelector("#copiar_texto")
var copiaIcone = document.querySelector("#copiar_icone");

copia.addEventListener('click', () => {
    navigator.clipboard.writeText(tabelaStr)
    copiaTexto.textContent = "Copiado"
    copia.style.color = "var(--accent-color)"
    
})