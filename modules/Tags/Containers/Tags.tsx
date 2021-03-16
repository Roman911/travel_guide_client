import { css } from 'aphrodite/no-important'
import { Tag } from '../Components'
import baseStyles from '../../../styles'

export const Tags = ({ tags }) => {
  return <div className={ css(baseStyles.flexFW) }>
    {
      tags.map((item, index) => {
        return <Tag key={ index } tag={ item } />
      })
    }
  </div>
}