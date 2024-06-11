import { ChangeEvent } from 'react'
import styles from './styles.module.scss'

type InputSelectProps = {
  label: string
  value: string
  onChange: (event: ChangeEvent<HTMLSelectElement>) => void
}

const InputSelect = ({ label, value, onChange }: InputSelectProps) => {
  return (
    <div className={styles.input_select}>
      <label>{label}</label>
      <select defaultValue={value} name="date-order" onChange={onChange}>
        <option value="Asc">Ascendant</option>
        <option value="Desc">Descendant</option>
      </select>
    </div>
  )
}

export default InputSelect
