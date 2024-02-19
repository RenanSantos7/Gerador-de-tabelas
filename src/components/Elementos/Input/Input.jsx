import styles from './Input.module.css'

export default function Input({label, min, placeholder}) {
    return (
        <label>
            <span className={styles.label}>{label}</span>
            <input
                type="number"
                min={min}
                placeholder={placeholder}
                className={styles.input}
            />
        </label>
    )
}
