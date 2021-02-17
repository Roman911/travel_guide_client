import { Tag } from '../Components'

export const Tags = ({ tags }) => {
  return tags.map((item, index) => {
    return <Tag key={ index } tag={ item } />
  })
}