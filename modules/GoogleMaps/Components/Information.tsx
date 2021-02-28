import Image from "next/image"
import React from "react"
// import Link from "next/link"
import { css } from "aphrodite/no-important"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons"
import { LocationSetting } from "../Containers"
import baseStyle from '../../../styles'
import styles from './styles'
import { Location } from '../../../typeScript/locations'

type MyInformationProps = {
  location: Location
  handleClick: () => void
  closeWindow: boolean
}

export const Information: React.FC<MyInformationProps> = ({ location, handleClick, closeWindow }) => {
  const { cover, small_text, title } = location
  const viewWindow = closeWindow ? css(styles.wrapper, styles.closedWindow) : css(styles.wrapper)

  return <div className={ viewWindow }>
    <div className={ css(styles.blockImg) }>
      <Image src={ cover.url } className={ css(styles.cover) } alt={ title } width={ 350 } height={ 200 } />
    </div>
    <div className={ css(styles.block, baseStyle.flexSB) }>
      <FontAwesomeIcon onClick={ handleClick } className={ css(styles.icon) } icon={ faArrowLeft }/>
      <p className={ css(styles.title) }>{ title }</p>
      <LocationSetting mapInformation={ true } />
    </div>
    <div className={ css(styles.blockText) }>
      <p className={ css(styles.text) }>{ small_text }</p>
    </div>
    {/*{ linkToPost.length !== 0 && <div className={ css(styles.blockText) }>*/}
    {/*  <p className={ css(styles.textInfo) }>Більше про { title } можете подивитись тут:</p>*/}
    {/*  <Link href={`/post/[id]`} as={ `/post/${ linkToPost }` }>*/}
    {/*    <a><span className={css(styles.link)}>{ title }</span></a>*/}
    {/*  </Link>*/}
    {/*</div>*/}
    {/*}*/}
  </div>
}