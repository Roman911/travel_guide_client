import React from "react"
import Link from "next/link"
import { css } from "aphrodite/no-important"
import styles from "./styles"

type HeaderFormProps = {
  title: string
  text: string
  link: string
  btn: string
}

export const HeaderForm: React.FC<HeaderFormProps> = ({ title, text, link, btn }) => {
  return <>
    <h1 className={css(styles.title)}>{ title }</h1>
    <div className={css(styles.wrapperForm, styles.bottomBlock)}>
      <span className={css(styles.text)}>{ `${ text } ` }</span>
      <Link href={ link }>
        <a>
          <span className={css(styles.link)}>{ btn }</span>
        </a>
      </Link>
    </div>
  </>
}