import React from "react"
import Link from "next/link"
import { css } from "aphrodite/no-important"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowRight } from "@fortawesome/free-solid-svg-icons"
import { SectionTitle } from "../SectionTitle"
import styles from './styles'

type HomePageBlockProps = {
  title: string
  content: {
    value: string
    path: string
  }
  length: {
    lengthDefault: number
    length: number
  }
}

export const HomePageBlock: React.FC<HomePageBlockProps> = ({ children, title, content: { value, path }, length: { lengthDefault, length }}) => {
  return <div className={ css(styles.HomePageBlockWrapper) }>
    <SectionTitle title={ title } />
    <div className={ css(styles.HomePageBlock) }>
      { children }
    </div>
    {
      length > lengthDefault && <div className={ css(styles.link) }>
        <Link href={ path }>
          <a>Показати більше { value } <FontAwesomeIcon icon={ faArrowRight } /></a>
        </Link>
      </div>
    }
  </div>
}