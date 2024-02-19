import styles from './SecCodigo.module.css'

export default function SecCodigo() {
    return (
        <section>
            <div class='container'>
                <h2>Código</h2>
                <p id='copiar'>
                    <span id='copiar_texto'>Copiar</span>
                    <span class='material-symbols-outlined' id='copiar_icone'>content_copy</span>
                </p>
            </div>

            <code className='codigoMostrar'>
                <pre>
                    <p>
                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                        Maecenas porttitor congue massa. Fusce posuere, magna sed
                        pulvinar ultricies, purus lectus malesuada libero, sit amet
                        commodo magna eros quis urna. Nunc viverra imperdiet enim.
                        Fusce est. Vivamus a tellus. Pellentesque habitant morbi
                        tristique senectus et netus et malesuada fames ac turpis
                        egestas.
                    </p>
                </pre>
            </code>
        </section>
    )
}
