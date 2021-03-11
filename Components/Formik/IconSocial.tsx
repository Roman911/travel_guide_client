import React from "react"
import {faFacebookF, faInstagram, faTwitter, faYoutube} from "@fortawesome/free-brands-svg-icons"
import socialIcon from "../../styles/socialIconStyle"

type IconSocialProps = {
  socialName: string
  icon: (icon, style) => void
}

export const IconSocial: React.FC<IconSocialProps> = ({ socialName, icon }): any => {
  switch (socialName) {
    case 'facebook':
      return icon(faFacebookF, socialIcon.iconF)
    case 'instagram':
      return icon(faInstagram, socialIcon.iconI)
    case 'twitter':
      return icon(faTwitter, socialIcon.iconT)
    case 'youtube':
      return icon(faYoutube, socialIcon.iconY)
    default:
      return null
  }
}