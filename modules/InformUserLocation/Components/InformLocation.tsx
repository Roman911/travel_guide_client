import React from "react"
import { css } from "aphrodite/no-important"
import styles from "./styles"
import { Button } from "../../../Components"

type InformLocationProps = {
  addLocationMyList: (arg: string) => void
  locationsUser: null | {
    action: string
  }
}

export const InformLocation: React.FC<InformLocationProps> = ({ addLocationMyList, locationsUser }): any => {
  const block = ( title: string, text: string, nameBtn?: string, action?: string ) => {
    return <div className={ css(styles.content) }>
      <p>{ title }</p>
      <p className={ css(styles.text) }>{ text }</p>
      { nameBtn && <Button handleClick={ addLocationMyList } nameBtn={ nameBtn } isSubmitting={ false } action={ action } /> }
    </div>
  }

  return <section className={ css(styles.wrapper) }>
    {
      locationsUser?.action === 'visited' ?
        block(
          'Ви вже тут були',
          'Це місце збережене у вашому списку місць які ви відвідали'
        ) : <>
          {locationsUser?.action === 'wantToVisit' ?
            block(
              'Ви плануєте відвідати це місце',
              'Це місце збережене у вашому списку для відвідування'
            )
            : block(
              'Плануєте відвідати?',
              'Збережіть це місце в свому списку запланованих для відвідування місць.',
              'Хочу відвідати',
              'wantToVisit'
            )}
          {block(
            'Були тут?',
            'Збережіть це місце в свому списку запланованих для відвідування місць.',
            'Уже відвідав',
            'visited'
          )}
        </>
    }
  </section>
}