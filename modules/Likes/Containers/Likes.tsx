import React from "react"
import { useDispatch } from 'react-redux'
import { useTypedSelector } from '../../../hooks/useTypedSelector'
import { Like } from '../Components'
import { ModalActionCreators } from "../../../redux/actionCreators"

type ILikes = {
  id: string
  likes: string[]
  post: boolean
  changeLike?: any
}

export const Likes:React.FC<ILikes> = ({ id, likes, post, changeLike }): any => {
  const [ quantityLikes, setQuantityLikes ] = React.useState(likes.length)
  const [ userLike, setUserLike ] = React.useState(false)
  const [ clickLike, setClickLike ] = React.useState( false )
  const { data } = useTypedSelector(state => state.user)
  const dispatch = useDispatch()
  const _id = data ? data._id : undefined

  React.useEffect(() => {
    likes.filter((item: string | undefined) => {
      setUserLike(item === _id)
    })
  }, [likes, _id])

  const options = {
    variables: { id, userId: _id }
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
        dispatch(ModalActionCreators.showModal('Щоб залишити палець вгору, Вам потрібно авторизоватись'))
      }
    }
  }
  return <Like post={ post } quantityLikes={ quantityLikes } userLike={ userLike } handleClick={ handleClick } clickLike={ clickLike } />
}