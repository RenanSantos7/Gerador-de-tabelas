import styles from './TabelaEditavel.module.css'

export default function TabelaEditavel({ linhas, colunas, vertical }) {

    if (vertical) {
        return (
            <div className={styles.tabelaEditavel}>
                <table>
                    <tr>
                        {Array.from({ length: colunas })
                            .map((_, index) => (
                                <th key={index}>Editar tabela</th>
                            ))}
                    </tr>
    
                    {Array.from({ length: linhas - 1 })
                        .map((_, rowIndex) => (
                            <tr key={rowIndex}>
                                {Array.from({ length: colunas })
                                    .map((_, colIndex) => (
                                        <td key={colIndex}>Editar tabela</td>
                                    ))}
                            </tr>
                        ))}
                </table>
            </div>
        );
    }

    return (
        <div className={styles.tabelaEditavel}>
            <table>
                {Array.from({ length: linhas })
                    .map((_, rowIndex) => (
                        <tr key={rowIndex}>
                            <th>Editar tabela</th>
                            {Array.from({ length: colunas - 1 })
                                .map((_, colIndex) => (
                                    <th key={colIndex}>Editar tabela</th>
                                ))}
                        </tr>
                    ))}
            </table>
        </div>
    )
}