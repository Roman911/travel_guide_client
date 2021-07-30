import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEye, faCommentAlt } from "@fortawesome/free-regular-svg-icons"
import { css } from 'aphrodite/no-important'
import baseStyles from '../../styles'

interface ArticleStatsProps {
  isArticle: boolean
  views: number
  comments?: number
}

export const ArticleStats: React.FC<ArticleStatsProps> = ({isArticle, views, comments}) => {
  return <div className={ css(baseStyles.flex) }>
      <span className={ css(baseStyles.views) }>
        <FontAwesomeIcon className={ css(baseStyles.iconS) } icon={ faEye }/>
        { views }
      </span>
    { !isArticle &&
    <span className={ css(baseStyles.comment) }>
      <FontAwesomeIcon className={ css(baseStyles.iconS) } icon={ faCommentAlt }/>
      { comments }
    </span>
    }
  </div>
}