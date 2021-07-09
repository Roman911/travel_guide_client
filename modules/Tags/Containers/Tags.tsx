import React from "react"
import Link from "next/link"
import { css } from 'aphrodite/no-important'
import { Tag } from '../Components'
import baseStyles from '../../../styles'

type TagsProps = {
  tags: string[]
  path: string
}

export const Tags: React.FC<TagsProps> = ({ tags, path }) => {
  return <div className={ css(baseStyles.flexFW) }>
    { tags.map((item, index) => {
      return <Link key={ index } href={{
        pathname: path,
        query: { item }
      }} >
        <a><Tag tag={ item } /></a>
      </Link>
    } )}
  </div>
}