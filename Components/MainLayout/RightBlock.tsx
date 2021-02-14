import { css } from "aphrodite/no-important"
import styles from "./styles"

export const RightBlock = ({ children }) => {
  return <div className={ css(styles.rightBlock) }>{ children }</div>
}