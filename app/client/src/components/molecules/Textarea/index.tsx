import { ChangeEvent, useEffect, useRef } from 'react'
import styles from './styles.module.scss'

type TextareaProps = {
  value: string
  onChange: (event: ChangeEvent<HTMLDivElement>) => void
  placeholder: string
}

const Textarea = ({ value, onChange, placeholder }: TextareaProps) => {
  const contentEditableRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (
      contentEditableRef.current &&
      contentEditableRef.current.textContent !== value
    ) {
      contentEditableRef.current.textContent = value
    }
  }, [value])

  return (
    <div className={styles.textarea}>
      {value.length == 0 && <p>{placeholder}</p>}
      <div contentEditable="true" ref={contentEditableRef} onInput={onChange} />
    </div>
  )
}

export default Textarea
