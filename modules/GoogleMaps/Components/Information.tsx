import Image from "next/image"
import React, { useEffect } from "react"
import Link from "next/link"
import { css } from "aphrodite/no-important"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons"
import { LocationSetting } from "../Containers"
import baseStyle from '../../../styles'
import styles from './styles'
import { Location } from '../../../typeScript/locations'

type MyInformationProps = {
  location: Location
  selectedPark: null | string
  handleClick: () => void
  closeWindow: boolean
  openWindow: boolean
  setOpenWindow: (action) => void
  setClassName: any
}

export const Information: React.FC<MyInformationProps> = ({ location, selectedPark, handleClick, closeWindow, openWindow, setOpenWindow, setClassName }) => {
  const { cover, small_text, title, post } = location
  const _id = post ? post._id : undefined

  useEffect(() => {
    setOpenWindow(true)
  }, [selectedPark])

  const wrapper = css(styles.wrapper, openWindow && closeWindow && styles.open)

  useEffect(() => {
    setClassName(wrapper)
  }, [])

  return <div className={ css(styles.wrapper, openWindow && closeWindow && styles.open) }>
    <div className={ css(styles.blockImg) }>
      <div className={ css(styles.imgWrapper) }>
        <Image src={ cover.url } className={ css(styles.cover) } layout='fill' alt={ title } />
      </div>
    </div>
    <div className={ css(styles.block, baseStyle.flexSB) }>
      <FontAwesomeIcon onClick={ handleClick } className={ css(styles.icon) } icon={ faArrowLeft }/>
      <p className={ css(styles.title) }>{ title }</p>
      <LocationSetting mapInformation={ true } location={ location } />
    </div>
    <div className={ css(styles.blockText) }>
      <p className={ css(styles.text) }>{ small_text }</p>
    </div>
    {
      _id && <div className={ css(styles.blockText) }>
        <p className={ css(styles.textInfo) }>Більше про { title } можете подивитись тут:</p>
        <Link href={`/post/[id]`} as={ `/post/${ _id }` }>
          <a><span className={css(styles.link)}>{ title }</span></a>
        </Link>
      </div>
    }
  </div>
}