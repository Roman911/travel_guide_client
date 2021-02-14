import React from "react"
import { css } from 'aphrodite/no-important'
import styles from './styles'

type MySectionTitleProps = {
  title: string
}

export const SectionTitle: React.FC<MySectionTitleProps> = ({ title }) => {
  return <section className={css(styles.fontStyle)}>
    { title }
  </section>
}