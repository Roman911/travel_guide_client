import React from "react"
import { useDispatch, useSelector } from 'react-redux'
import { useMutation } from '@apollo/react-hooks'
import { Like } from '../Components'
import { LIKE } from '../../../apollo/mutations'
import { modalActions } from "../../../redux/actions"

import { User } from "../../../typeScript/user"
type MyLikesProps = {
  id: string
  likes: string[]
  post: boolean
}

export const Likes:React.FC<MyLikesProps> = ({ id, likes, post }): any => {
  const [ quantityLikes, setQuantityLikes ] = React.useState(likes.length)
  const [ userLike, setUserLike ] = React.useState(false)
  const [ clickLike, setClickLike ] = React.useState( false )
  const user = useSelector((state: { user: User }) => state.user)
  const dispatch = useDispatch()
  const { data } = user
  const _id = data ? data._id : undefined

  React.useEffect(() => {
    likes.filter((item: string | undefined) => {
      setUserLike(item === _id)
    })
  }, [likes, _id])

  const [ changeLike ] = useMutation(LIKE)

  const options = {
    variables: { postId: id, userId: _id }
  }

  const handleClick = () => {
    if (post) {
      if (_id) {
        setQuantityLikes( userLike ? quantityLikes -1 : quantityLikes +1)
        setUserLike(prevState => !prevState)
        changeLike(options).then()
        setClickLike(prevState => !prevState)
        setTimeout(() => {
          setClickLike(prevState => !prevState)
        }, 250)
      } else {
        dispatch(modalActions.showModal('Щоб залишити палець вгору, Вам потрібно авторизоватись'))
      }
    }
  }
  return <Like post={ post } quantityLikes={ quantityLikes } userLike={ userLike } handleClick={ handleClick } clickLike={ clickLike } />
}