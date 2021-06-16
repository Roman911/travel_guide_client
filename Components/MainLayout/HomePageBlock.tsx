import React from "react"
import { css } from "aphrodite/no-important"
import { SectionTitle } from "../SectionTitle"
import styles from './styles'

type HomePageBlockProps = {
  title: string
}

export const HomePageBlock: React.FC<HomePageBlockProps> = ({ children, title }) => {
  return <div>
    <SectionTitle title={ title } />
    <div className={ css(styles.HomePageBlockWrapper) }>
      { children }
    </div>
  </div>
}