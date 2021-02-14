import React from 'react'
import moment from 'moment'
import { css } from "aphrodite"
import styles from "./styles"

interface DateProps {
  date: string,
  format: string
}

export const Date:React.FC<DateProps> = ({ date, format }) => {
  return <p className={ css(styles.time) }>{ moment.utc(`Date(${ date })`).format(format) }</p>
}