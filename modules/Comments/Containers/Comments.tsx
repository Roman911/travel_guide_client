import React from "react"
import { useQuery } from "@apollo/client"
import { COMMENTS } from "../../../apollo/queries"
import { CreateComments } from "./"
import { LoadingSpin } from "../../../Components"
import { WrapperComments } from '../Components'
import { CommentsMap } from "./CommentsMap"

type CommentsProps = {
  postId: string
}

const Comments: React.FC<CommentsProps> = ({ postId }): any => {
  const { loading, error, data } = useQuery( COMMENTS, { variables: { postId } })
  if (loading) return <LoadingSpin />
  if (error) return `Error! ${ error }`

  return <WrapperComments >
    <CreateComments postId={ postId } isFirstComment={ true } />
    { data.comments.length !== 0 ? <CommentsMap comments={ data.comments } postId={ postId } /> : <h4>Коментарі ще ніхто не залишав. Будьте першим</h4> }
  </WrapperComments>
}

export default Comments