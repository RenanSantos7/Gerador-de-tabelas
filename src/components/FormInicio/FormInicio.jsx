import styles from './FormInicio.module.css'
import Botao from '../Elementos/Botao/Botao'

export default function FormInicio({
    colunas, setColunas,
    linhas, setLinhas,
    mostraSecEditar
}) {
    return (
        <section className={styles.formInicio}>
            <form>
                <label className={styles.formInicio__label}>
                    <span className={styles.label}>Digite o número de colunas:</span>
                    <input
                        type="number"
                        min={2}
                        className={styles.input}
                        value={colunas}
                        onChange={evt => setColunas(Number(evt.target.value))}
                    />
                </label>

                <label className={styles.formInicio__label}>
                    <span className={styles.label}>Digite o número de linhas:</span>
                    <input
                        type="number"
                        min={3}
                        className={styles.input}
                        value={linhas}
                        onChange={evt => setLinhas(Number(evt.target.value))}
                    />
                </label>
            </form>
            
            <div className={styles.botaoContainer}>
                <Botao
                    aoClicar={() => {
                        mostraSecEditar(true)
                    }}
                >Gerar!</Botao>
            </div>
        </section>
    )
}
