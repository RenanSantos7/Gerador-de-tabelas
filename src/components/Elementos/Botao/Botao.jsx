import styles from './Botao.module.css'

export default function Botao({children, aoClicar}) {
    return (
        <div className="container">
            <button
                type='button'
                onClick={aoClicar}
                className={styles.botao}
            >{children}</button>
        </div>
    )
}
