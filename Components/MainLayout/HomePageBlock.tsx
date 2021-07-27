import React from "react"
import { css } from "aphrodite/no-important"
import { SectionTitle } from "../SectionTitle"
import styles from './styles'
import Link from "next/link";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowRight} from "@fortawesome/free-solid-svg-icons";

type HomePageBlockProps = {
  title: string
  content?: {
    value: 'новин' | 'маршрутів'
    path: '/posts' | '/directions'
  }
  lengthDefault: number
  length: number | undefined
  home?: boolean
}

export const HomePageBlock: React.FC<HomePageBlockProps> = ({ children, title, content, lengthDefault, length, home }) => {
  return <div className={ css(styles.HomePageBlockWrapper) }>
    <SectionTitle title={ title } />
    <div className={ css(styles.HomePageBlock, home && styles.HPBHome) }>
      { children }
    </div>
    {
      content && length > lengthDefault && <div className={ css(styles.link) }>
        <Link href={ content.path }>
          <a>Показати більше { content.value } <FontAwesomeIcon icon={ faArrowRight } /></a>
        </Link>
      </div>
    }
  </div>
}