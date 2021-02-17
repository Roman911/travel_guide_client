import { css } from "aphrodite/no-important"
import styles from './styles'

export const LeftBlock = ({ children, isNews }) => {
  return <div className={ css(styles.leftBlock, isNews && styles.leftBlockNews) }>{ children }</div>
}