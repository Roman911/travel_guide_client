import { StyleSheet } from 'aphrodite/no-important'

import { borders, icons, btn } from "../../../variabels"

export default StyleSheet.create({
  wrapper: {
    border: `2px solid ${ borders.border }`,
    padding: 10,
    display: 'flex',
    alignItems: 'flex-start',
    marginBottom: 20
  },
  block: {
    width: '100%'
  },
  iconNoAvatar: {
    height: 40,
    width: 'auto !important',
    color: icons,
    opacity: 0.7,
    padding: '0 5px'
  },
  link: {
    color: btn,
    fontWeight: 600,
    marginTop: 6
  },
  blockUser: {
    width: '100%',
    paddingLeft: 10
  },
  blockText: {
    padding: 10,
    background: '#f7f7f7',
    borderRadius: 6
  },
  text: {
    fontSize: '1rem'
  },
  btn: {
    fontSize: '0.65rem',
    color: 'rgba(0,0,0,.5)',
    textTransform: 'uppercase',
    cursor: 'pointer',
    fontWeight: 800,
    marginBottom: 8,
    ':hover': {
      color: 'red'
    }
  },
  submit: {
    marginBottom: 25,
    textAlign: 'end'
  },
  submitPosition: {
    justifyContent: 'flex-end'
  }
})