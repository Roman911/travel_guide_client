import { css } from "aphrodite/no-important"
import styles from './styles'

export const LeftBlock = ({ children }) => {
  return <div className={ css(styles.leftBlock) }>{ children }</div>
}