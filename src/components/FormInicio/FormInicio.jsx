import styles from './FormInicio.module.css'
import Botao from '../Elementos/Botao/Botao'
import Input from '../Elementos/Input/Input'

export default function FormInicio() {
    return (
        <section className={styles.formInicio}>
            <form>
                <Input
                    label='Digite o número de colunas:'
                    min={2}
                    placeholder='2'
                />

                <Input
                    label='Digite o número de linhas:'
                    min={3}
                    placeholder='3'
                />
            </form>
            
            <Botao>Gerar!</Botao>
        </section>
    )
}
