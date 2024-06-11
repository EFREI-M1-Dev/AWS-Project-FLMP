import icons from './icons'
import styles from './styles.module.scss'

type IconProps = {
  name: string
  color?: string
}

const Icon = ({ name, color }: IconProps) => {
  const IconComponent = icons[name]

  if (!IconComponent) {
    console.error(`L'icône "${name}" n'existe pas.`)
    return null // Assurez-vous de retourner null en cas d'erreur pour éviter les erreurs de rendu
  }

  return <IconComponent className={styles.icon} color={color} />
}

export default Icon
