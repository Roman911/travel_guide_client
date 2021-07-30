import React from "react"
import Link from "next/link"
import { css } from "aphrodite/no-important"
import baseStyle from "../../../styles"
import styles from "./styles"
import { Avatar, ButtonLink, Date, UserName } from "../../../Components"
import { CommentsMap, CreateComments } from "../Containers"
import { Comments } from '../../../typeScript/comments'

export const Comment: React.FC<Comments> = ({ _id, author, createdAt, content, answers, postId, commentsId, userId }: Comments): any => {
  const [ showCreateComment, setShowCreateComment ] = React.useState(false)
  const link = userId && userId === author._id ? [`/profile`, `/profile`] : [`/profile/[id]`, `/profile/${ author._id }`]
  const [ href, as ] = link
  const handleClick = () => setShowCreateComment(!showCreateComment)

  return <section className={ css(baseStyle.flexVFS) }>
    <Link href={ href } as={ as } >
      <a>
        <Avatar avatar={ author.avatar } name={ author.name } size='S' />
      </a>
    </Link>
    <div className={ css(styles.blockUser) }>
      <div className={ css(baseStyle.flexSB) }>
        <Link href={ href } as={ as } >
          <a className={ css(baseStyle.a) }>
            <UserName name={ author.name } />
          </a>
        </Link>
        <Date date={ createdAt } format={ 'LL' } />
      </div>
      <div className={ css(styles.blockText) }>
        <p className={ css(styles.text) }>{ content }</p>
      </div>
      <ButtonLink handleClick={ handleClick } nameBtn='відповісти' />
      { showCreateComment && <CreateComments _id={ _id } isFirstComment={ false } handleClick={ handleClick } postId={ postId } commentsId={ commentsId } /> }
      { answers && answers.length > 0 && <CommentsMap comments={ answers } postId={ postId } commentsId={ _id } /> }
    </div>
  </section>
}