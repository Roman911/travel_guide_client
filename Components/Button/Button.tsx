import React from "react"
import { css } from 'aphrodite/no-important'
import styles from "./styles"

type MyButtonProps = {
  type?: "button" | "submit" | "reset"
  nameBtn: string
  handleClick?: (arg: string) => void
  isSubmitting: boolean
  action?: string | undefined
}

export const Button: React.FC<MyButtonProps> = ({ type, nameBtn, handleClick, isSubmitting, action }) => {
  const btnStyle = isSubmitting ? css(styles.btn, styles.btnGray) : css(styles.btn)
  return <button type={ type } onClick={ () => handleClick ? handleClick(action as string) : void(0) } className={ btnStyle }>
    { nameBtn }
  </button>
}