import React from "react"
import { createPortal } from "react-dom"
import { css } from 'aphrodite/no-important'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faInfo } from "@fortawesome/free-solid-svg-icons"
import { Button } from ".."
import usePortal from "../../hooks/usePortal"
import baseStyles from '../../styles/'
import styles from "./styles"

type InformWindowProps = {
  id: string
  children: string
  closedModal: null | boolean
  handleClick: () => void
}

const InformWindow: React.FC<InformWindowProps> = ({ id, children, closedModal, handleClick }) => {
  const target = usePortal(id)
  const cln = css(styles.wrapper, closedModal ? styles.closedModal : styles.openModal)

  return createPortal(
    <div className={ cln }>
      <div className={ css(baseStyles.flex) }>
        <FontAwesomeIcon className={ css(styles.icon) } icon={ faInfo }/>
        <p className={ css(styles.text) }>
          { children }
        </p>
      </div>
      <div className={ css(styles.bottom) } >
        <Button handleClick={ handleClick } nameBtn='Закрити' isSubmitting={ false } />
      </div>
    </div>,
    target,
  )
}

export default InformWindow