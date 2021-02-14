import { StyleSheet } from 'aphrodite/no-important'

import { btn } from '../../variabels'

export default StyleSheet.create({
  btn: {
    boxShadow: `0 5px 12px rgba(0,0,0,.1)`,
    padding: '8px 16px',
    background: btn,
    color: '#fff',
    textTransform: 'uppercase',
    transition: '200ms',
    ':hover': {
      boxShadow: `0 5px 16px rgba(0,0,0,.16)`,
    }
  },
  btnGray: {
    background: 'gray'
  },
//  ButtonText
  btnLink: {
    fontSize: '0.65rem',
    color: 'rgba(0,0,0,.5)',
    textTransform: 'uppercase',
    cursor: 'pointer',
    fontWeight: 800,
    marginBottom: 8,
    marginRight: 14,
    ':hover': {
      color: btn
    }
  },
  icon: {
    marginRight: 6
  }
})