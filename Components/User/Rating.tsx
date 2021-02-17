import React from "react"
import { css } from "aphrodite/no-important"
import styles from './styles'

type RatingProps = {
  rating: number
}

export const Rating: React.FC<RatingProps> = ({ rating }) => {
  return <span className={ css(styles.rating) }>
    { rating }
  </span>
}