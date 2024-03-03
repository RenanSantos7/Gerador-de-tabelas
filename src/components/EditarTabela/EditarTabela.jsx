import styles from './EditarTabela.module.css'
import Botao from '../Elementos/Botao/Botao'
import TabelaEditavel from '../Elementos/Tabela/Tabela'

export default function EditarTabela({
    linhas,
    colunas,
    vertical,
    setVertical,
    exibir
}) {
    return (
        <section id='editarTabela' style={{
           // display: editar ? 'block' : 'none'
        }}>
            <h2>Editar tabela</h2>
            <div className={styles.radios}>
                <label className={styles.label}>
                    <input
                        type='radio'
                        name='setindo'
                        checked={vertical}
                        onChange={() => setVertical(true)}
                    />
                    <span>Vertical</span>
                </label>

                <label className={styles.label}>
                    <input
                        type='radio'
                        name='sentido'
                        checked={!vertical}
                        onChange={() => setVertical(false)}
                    />
                    <span>Horizontal</span>
                </label>
            </div>

            <TabelaEditavel
                linhas={linhas}
                colunas={colunas}
                vertical={vertical}
            />

            <Botao>Gerar código</Botao>
        </section>
    )
}
