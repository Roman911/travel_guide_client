import React from 'react'
import { css } from "aphrodite/no-important"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLink } from "@fortawesome/free-solid-svg-icons"
import styles from "./styles"

type SourceProps = {
  link: string
}

export const Source: React.FC<SourceProps> = ({ link }) => {
  return <div className={ css(styles.source) }>
    <a href={ link } target='_blank' >
      <FontAwesomeIcon icon={ faLink } />
      <span className={ css(styles.sourceSpan) }>Джерело</span>
    </a>
  </div>
}