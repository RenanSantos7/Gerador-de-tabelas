import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styles from './SecCodigo.module.css'
import { faCopy } from '@fortawesome/free-regular-svg-icons'

export default function SecCodigo() {
    return (
        <section>
            <div className={styles.container}>
                <h2>Código</h2>
                <div className={styles.copiar}>
                    <span id='copiar_texto'>Copiar</span>
                    <FontAwesomeIcon icon={faCopy} />
                </div>
            </div>

            <code className={styles.codigoMostrar}>
                <pre>
                        {`
<p>
    Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
    Maecenas porttitor congue massa. Fusce posuere, magna sed
    pulvinar ultricies, purus lectus malesuada libero, sit amet
    commodo magna eros quis urna. Nunc viverra imperdiet enim.
    Fusce est. Vivamus a tellus. Pellentesque habitant morbi
    tristique senectus et netus et malesuada fames ac turpis
    egestas.
</p>
                        `}
                </pre>
            </code>
        </section>
    )
}
