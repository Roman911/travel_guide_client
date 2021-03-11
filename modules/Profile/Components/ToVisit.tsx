import React from "react"
import { css } from "aphrodite/no-important"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faMapMarkedAlt } from "@fortawesome/free-solid-svg-icons"
import baseStyles from '../../../styles'
import styles from './styles'
import { Button } from "../../../Components"
import { Location } from "../Containers"
import { UserData } from "../../../typeScript/user"

type ToVisitProps = {
  user: UserData
  locationsUserList: [{
    _id: string
    locationId: string
    userId: string
  }]
  nameSection: string
  handleClick: (arg: string) => void
}

export const ToVisit: React.FC<ToVisitProps> = ({ user, locationsUserList, nameSection, handleClick }) => {
  if (locationsUserList.length > 0) {
    const location = locationsUserList.map((item, index) => {
      return <Location key={ index } user={ user } _id={ item._id } locationId={ item.locationId } nameSection={ nameSection } handleClick={ handleClick } />
    })

    return <section>
      <div className={ css(styles.blockBtn) }>
        <FontAwesomeIcon className={ css(baseStyles.icon, styles.iconMap) } icon={ faMapMarkedAlt } />
        <Button nameBtn='Показати на карті' isSubmitting={ false } />
      </div>
      { location }
    </section>
  }
  return <section className={ css(styles.wrapperNoVisit) }>
    <h2 className={ css(styles.noVisitHeader) }>Схоже, що ви досі не обрали жодної локації</h2>
  </section>
}