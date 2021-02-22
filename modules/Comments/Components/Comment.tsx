import React, {useState} from "react"
import { css } from "aphrodite/no-important"
import baseStyle from "../../../styles"
import styles from "./styles"
import { Avatar, ButtonLink, Date, UserName } from "../../../Components"
import { CommentsMap, CreateComments } from "../Containers"

import { Comments } from '../../../typeScript/comments'

export const Comment: React.FC<Comments> = ({ _id, author, createdAt, content, answers, postId, commentsId }: Comments): any => {
  const [ showCreateComment, setShowCreateComment ] = useState(false)
  const handleClick = () => {
    setShowCreateComment(!showCreateComment)
  }

  return <section className={ css(baseStyle.flexVFS) }>
    <Avatar avatar={ author.avatar } name={ author.name } size='S' />
    <div className={ css(styles.blockUser) }>
      <div className={ css(baseStyle.flexSB) }>
        <UserName name={ author.name } />
        <Date date={ createdAt } format={ 'LL' } />
      </div>
      <div className={ css(styles.blockText) }>
        <p className={ css(styles.text) }>{ content }</p>
      </div>
      <ButtonLink handleClick={ handleClick } nameBtn='відповісти' />
      { showCreateComment && <CreateComments _id={ _id } isFirstComment={ false } handleClick={ handleClick } postId={ postId } commentsId={ commentsId } /> }
      {
        answers && answers.length > 0 && <CommentsMap comments={ answers } postId={ postId } commentsId={ _id } />
      }
    </div>
  </section>
}