import React from "react"
import { css } from "aphrodite/no-important"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCrown } from "@fortawesome/free-solid-svg-icons"
import baseStyles from "../../styles"
import styles from "./styles"

type MyNameUserProps = {
  name: string
}

export const UserName: React.FC<MyNameUserProps> = ({ name }) => {
  return <section className={css(baseStyles.flex)}>
    {
      name !== 'Admin' ?
        <span className={css(styles.name)}>{ name }</span> :
        <span className={css(baseStyles.flex)}>
        <span className={css(styles.name)}>{ name }</span>
        <FontAwesomeIcon className={css(styles.crown)} icon={faCrown}/>
      </span>
    }
  </section>
}