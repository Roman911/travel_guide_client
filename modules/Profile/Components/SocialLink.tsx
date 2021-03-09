import React from "react"
import Link from "next/link"
import { css } from "aphrodite/no-important"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFacebookF, faInstagram, faTwitter, faYoutube } from "@fortawesome/free-brands-svg-icons"
import baseStyles from "../../../styles"
import styles from "./styles"

type SocialLinkProps = {
  socials: any
}

export const SocialLink: React.FC<SocialLinkProps> = ({ socials }): any => {
  const link = ( link: string, iconSocial: string, index: number ) => {
    const socialLink = (style, icon) => {
      return <Link key={ index } href={ link } as={ link } >
        <a target='_blank'>
          <FontAwesomeIcon className={ css(baseStyles.icon, styles.icon, style) } icon={ icon } />
        </a>
      </Link>
    }

    switch (iconSocial) {
      case 'facebook':
        return socialLink(styles.iconF, faFacebookF)
      case 'instagram':
        return socialLink(styles.iconI, faInstagram)
      case 'twitter':
        return socialLink(styles.iconT, faTwitter)
      case 'youtube':
        return socialLink(styles.iconY, faYoutube)
      default:
        return null
    }
  }

  return socials.map((item, index) => {
    return link( item.link, item.social, index )
  })
}