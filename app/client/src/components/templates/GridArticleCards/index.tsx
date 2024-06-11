import styles from './styles.module.scss'

type GridArticleCardsProps = {
  children: React.ReactElement[] | React.ReactElement
}

const GridArticleCards = ({ children }: GridArticleCardsProps) => {
  return <div className={styles.grid_article_cards}>{children}</div>
}

export default GridArticleCards
