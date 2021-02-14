import React from "react"
import { css } from "aphrodite/no-important"
import styles from "./styles"

type SpinProps = {
  isLight?: boolean
}

export const LoadingSpin: React.FC<SpinProps> = ({ isLight }) => {
  const className = isLight ? styles.ldsRingDivLight : styles.ldsRingDivDark

  return <div className={ css(styles.wrapperSpin) }>
    <div className={ css(styles.ldsRing) }>
      <div className={ css(styles.ldsRingDiv, className, styles.ldsRingDivC1) }/>
      <div className={ css(styles.ldsRingDiv, className, styles.ldsRingDivC2) }/>
      <div className={ css(styles.ldsRingDiv, className, styles.ldsRingDivC3) }/>
      <div className={ css(styles.ldsRingDiv, className) }/>
    </div>
  </div>
}