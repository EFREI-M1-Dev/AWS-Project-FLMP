import classNames from 'classnames'
import styles from './button.module.scss'

type ButtonProps = {
  children: string | React.ReactElement[]
  size?: 'sm' | 'md'
  color?: 'black' | 'green'
  active?: boolean
  outline?: boolean
  underline?: boolean
  widthAuto?: boolean
  onClick?: () => void
  className?: string
}

const Button = ({
  children,
  size = 'md',
  color = 'black',
  active = false,
  outline = false,
  widthAuto = false,
  underline = false,
  className,
  onClick,
}: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={classNames(styles.button, className, {
        [styles[`size-${size}`]]: size,
        [styles[`color-${color}`]]: color,
        [styles.active]: active,
        [styles.outline]: outline,
        [styles.underline]: underline,
        [styles['width-auto']]: widthAuto,
      })}
    >
      {children}
    </button>
  )
}

export default Button
