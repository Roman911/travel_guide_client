import React from "react"
import Image from "next/image"
import Link from "next/link"
import { css } from "aphrodite/no-important"
import styles from "./styles"

export const NavBarAuthorization = () => {
  return <div className={ css(styles.wrapper) }>
    <Image src='/logo.png' layout='intrinsic' alt='logo' width={128} height={58} />
    <Link href='/'>
      <a className={ css(styles.closed) }>
        x
      </a>
    </Link>
  </div>
}