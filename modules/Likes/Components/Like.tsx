import React from "react"
import { css } from "aphrodite/no-important"
import { faThumbsUp as faThumbRegular } from "@fortawesome/free-regular-svg-icons"
import { faThumbsUp as faThumbSolid } from "@fortawesome/free-solid-svg-icons"
import { LikeIcon } from './LikeIcon'
import baseStyles from '../../../styles/'
import styles from './styles'

type MyLikeProps = {
  post: boolean
  quantityLikes: number
  userLike: boolean
  handleClick: () => void
  clickLike: boolean
}

export const Like:React.FC<MyLikeProps> = ({ post, quantityLikes, userLike, handleClick, clickLike }) => {
  const likeNumber = quantityLikes !== 0 && <p className={ css(styles.text) }>{ quantityLikes }</p>
  const isPost = post && styles.iconPost
  const isUserLike = userLike && styles.iconActive
  const isClick = clickLike && styles.iconAnimations
  const className = css(baseStyles.icon, styles.icon, isPost, isUserLike, isClick)
  const iconHearts = userLike ? faThumbSolid : faThumbRegular
  const likeActive = <LikeIcon className={ className } handleClick={ handleClick } iconHearts={ iconHearts } />

  return <div className={ css(baseStyles.flex) }>
    { likeActive }
    { likeNumber }
  </div>
}