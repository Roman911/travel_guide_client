import { css } from "aphrodite/no-important"
import styles from './styles'

export const WithRightBlock = ({ children }) => {
  return <div className={ css(styles.wrapper) }>
    { children }
  </div>
}