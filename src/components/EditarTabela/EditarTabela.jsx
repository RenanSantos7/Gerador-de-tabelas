import Botao from '../Elementos/Botao/Botao'
import styles from './EditarTabela.module.css'

export default function EditarTabela() {
    return (
        <section>
            <h2>Editar tabela</h2>
            <div className={styles.radios}>
                <label>
                    <input type="radio" name="sentido" id="vertical" checked />
                    Vertical
                </label>

                <label id="horizontal">
                    <input type="radio" name="sentido" /> Horizontal
                </label>
            </div>

            <div id="tabela-editavel"></div>

            <Botao>Gerar código</Botao>
        </section>
    )
}
